'use client'

import { useRef, useEffect, useState } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'

interface DarkVeilProps {
  className?: string
  intensity?: number
  speed?: number
  color?: string
  opacity?: number
}

const DarkVeil = ({
  className = '',
  intensity = 1.0,
  speed = 1.0,
  color = '#000000',
  opacity = 0.3
}: DarkVeilProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<any>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const cleanupFunctionRef = useRef<(() => void) | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const hexToRgb = (hex: string): [number, number, number] => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [0, 0, 0]
  }

  useEffect(() => {
    if (!containerRef.current) return

    observerRef.current = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observerRef.current.observe(containerRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !containerRef.current) return

    if (cleanupFunctionRef.current) {
      cleanupFunctionRef.current()
      cleanupFunctionRef.current = null
    }

    const initializeWebGL = async () => {
      if (!containerRef.current) return

      await new Promise(resolve => setTimeout(resolve, 10))

      if (!containerRef.current) return

      const renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio, 2),
        alpha: true
      })
      rendererRef.current = renderer

      const gl = renderer.gl
      gl.canvas.style.width = '100%'
      gl.canvas.style.height = '100%'

      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild)
      }
      containerRef.current.appendChild(gl.canvas)

      const vert = `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }`

      const frag = `precision highp float;

        uniform float iTime;
        uniform vec2 iResolution;
        uniform float intensity;
        uniform float speed;
        uniform vec3 color;
        uniform float opacity;

        varying vec2 vUv;

        // Smooth noise function
        float smoothNoise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = dot(i, vec2(12.9898, 78.233));
          float b = dot(i + vec2(1.0, 0.0), vec2(12.9898, 78.233));
          float c = dot(i + vec2(0.0, 1.0), vec2(12.9898, 78.233));
          float d = dot(i + vec2(1.0, 1.0), vec2(12.9898, 78.233));
          
          return mix(mix(fract(sin(a) * 43758.5453), fract(sin(b) * 43758.5453), f.x),
                    mix(fract(sin(c) * 43758.5453), fract(sin(d) * 43758.5453), f.x), f.y);
        }

        // Fractal Brownian Motion for smooth patterns
        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          
          for (int i = 0; i < 6; i++) {
            value += amplitude * smoothNoise(st * frequency);
            amplitude *= 0.5;
            frequency *= 2.0;
          }
          
          return value;
        }

        void main() {
          vec2 st = vUv;
          float time = iTime * speed;
          
          // Create flowing veil with smooth movement
          vec2 flow1 = st + vec2(sin(time * 0.5), cos(time * 0.3)) * 0.1;
          vec2 flow2 = st + vec2(cos(time * 0.4), sin(time * 0.6)) * 0.15;
          
          // Multiple layers of smooth noise
          float n1 = fbm(flow1 * 2.0);
          float n2 = fbm(flow2 * 3.0);
          float n3 = fbm(st * 1.5 + time * 0.1);
          
          // Combine layers for depth
          float combined = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);
          
          // Create smooth veil pattern
          float veil = sin(combined * 3.14159 * 2.0) * 0.5 + 0.5;
          veil = smoothstep(0.2, 0.8, veil); // Smooth transition
          
          // Create radial gradient
          float dist = distance(st, vec2(0.5));
          float gradient = 1.0 - smoothstep(0.0, 0.7, dist);
          gradient = pow(gradient, 0.5);
          
          // Combine for final effect
          float finalAlpha = veil * gradient * opacity * intensity;
          
          // Add gentle pulsing
          finalAlpha *= (0.9 + 0.1 * sin(time * 1.5));
          
          gl_FragColor = vec4(color, finalAlpha);
        }`

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        intensity: { value: intensity },
        speed: { value: speed },
        color: { value: hexToRgb(color) },
        opacity: { value: opacity }
      }
      uniformsRef.current = uniforms

      const geometry = new Triangle(gl)
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms
      })
      const mesh = new Mesh(gl, { geometry, program })
      meshRef.current = mesh

      const updatePlacement = () => {
        if (!containerRef.current || !renderer) return

        renderer.dpr = Math.min(window.devicePixelRatio, 2)

        const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current
        renderer.setSize(wCSS, hCSS)

        const dpr = renderer.dpr
        const w = wCSS * dpr
        const h = hCSS * dpr

        uniforms.iResolution.value = [w, h]
      }

      const loop = (t: number) => {
        if (!rendererRef.current || !uniformsRef.current || !meshRef.current) {
          return
        }

        uniforms.iTime.value = t * 0.001

        try {
          renderer.render({ scene: mesh })
          animationIdRef.current = requestAnimationFrame(loop)
        } catch (error) {
          console.warn('WebGL rendering error:', error)
          return
        }
      }

      window.addEventListener('resize', updatePlacement)
      updatePlacement()
      animationIdRef.current = requestAnimationFrame(loop)

      cleanupFunctionRef.current = () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
          animationIdRef.current = null
        }

        window.removeEventListener('resize', updatePlacement)

        if (renderer) {
          try {
            const canvas = renderer.gl.canvas
            const loseContextExt = renderer.gl.getExtension('WEBGL_lose_context')
            if (loseContextExt) {
              loseContextExt.loseContext()
            }

            if (canvas && canvas.parentNode) {
              canvas.parentNode.removeChild(canvas)
            }
          } catch (error) {
            console.warn('Error during WebGL cleanup:', error)
          }
        }

        rendererRef.current = null
        uniformsRef.current = null
        meshRef.current = null
      }
    }

    initializeWebGL()

    return () => {
      if (cleanupFunctionRef.current) {
        cleanupFunctionRef.current()
        cleanupFunctionRef.current = null
      }
    }
  }, [isVisible, intensity, speed, color, opacity])

  useEffect(() => {
    if (!uniformsRef.current) return

    const u = uniformsRef.current
    u.intensity.value = intensity
    u.speed.value = speed
    u.color.value = hexToRgb(color)
    u.opacity.value = opacity
  }, [intensity, speed, color, opacity])

  return <div ref={containerRef} className={`dark-veil-container ${className}`.trim()} />
}

export default DarkVeil
