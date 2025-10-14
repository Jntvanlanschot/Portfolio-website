'use client'

import { useRef, useEffect, useState } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'

interface OrbProps {
  className?: string
  intensity?: number
  speed?: number
  color?: string
  opacity?: number
  size?: number
  hoverEffect?: boolean
}

const Orb = ({
  className = '',
  intensity = 1.0,
  speed = 1.0,
  color = '#6c63ff',
  opacity = 0.3,
  size = 1.0,
  hoverEffect = false
}: OrbProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<any>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const cleanupFunctionRef = useRef<(() => void) | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
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
    if (!hoverEffect || !containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1.0 - (e.clientY - rect.top) / rect.height // Flip Y coordinate
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    const container = containerRef.current
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hoverEffect])

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
        uniform float size;
        uniform vec2 mouse;
        uniform float hover;

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

        // Fractal Brownian Motion
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

        // Create realistic orb with proper lighting
        void main() {
          vec2 st = vUv;
          float time = iTime * speed;
          
          // Create orb center with mouse interaction
          vec2 center = vec2(0.5, 0.5);
          if (hover > 0.5) {
            center = mix(vec2(0.5, 0.5), mouse, 0.2);
          }
          
          // Calculate distance from center
          vec2 offset = st - center;
          float dist = length(offset);
          
          // Create spherical shape with smooth falloff
          float sphere = 1.0 - smoothstep(0.0, 0.4 * size, dist);
          sphere = pow(sphere, 1.5);
          
          // Create 3D-like surface with noise
          vec2 surfaceUV = offset * 3.0 + center;
          vec2 flow1 = surfaceUV + vec2(sin(time * 0.3), cos(time * 0.2)) * 0.1;
          vec2 flow2 = surfaceUV + vec2(cos(time * 0.4), sin(time * 0.3)) * 0.15;
          
          // Multiple noise layers for surface detail
          float n1 = fbm(flow1 * 2.0);
          float n2 = fbm(flow2 * 3.0);
          float n3 = fbm(surfaceUV * 1.5 + time * 0.05);
          
          // Combine noise for surface texture
          float surface = (n1 * 0.4 + n2 * 0.3 + n3 * 0.3);
          
          // Create lighting effect (simulate light coming from top-left)
          vec2 lightDir = normalize(vec2(-0.3, -0.7));
          float lighting = dot(normalize(offset), lightDir) * 0.5 + 0.5;
          lighting = pow(lighting, 0.8);
          
          // Create rim lighting
          float rim = 1.0 - smoothstep(0.2, 0.4, dist);
          rim = pow(rim, 2.0);
          
          // Combine all effects
          float orbPattern = sin(surface * 3.14159 * 2.0) * 0.3 + 0.7;
          orbPattern = smoothstep(0.3, 0.9, orbPattern);
          
          // Apply lighting and surface details
          float finalIntensity = sphere * orbPattern * lighting;
          finalIntensity += rim * 0.3; // Add rim lighting
          
          // Apply opacity and intensity
          float finalAlpha = finalIntensity * opacity * intensity;
          
          // Add gentle pulsing
          finalAlpha *= (0.95 + 0.05 * sin(time * 1.0));
          
          // Enhance effect on hover
          if (hover > 0.5) {
            finalAlpha *= 1.3;
          }
          
          gl_FragColor = vec4(color, finalAlpha);
        }`

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        intensity: { value: intensity },
        speed: { value: speed },
        color: { value: hexToRgb(color) },
        opacity: { value: opacity },
        size: { value: size },
        mouse: { value: [mousePosition.x, mousePosition.y] },
        hover: { value: isHovered ? 1.0 : 0.0 }
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
  }, [
    isVisible,
    intensity,
    speed,
    color,
    opacity,
    size
  ])

  useEffect(() => {
    if (!uniformsRef.current) return

    const u = uniformsRef.current
    u.intensity.value = intensity
    u.speed.value = speed
    u.color.value = hexToRgb(color)
    u.opacity.value = opacity
    u.size.value = size
    u.mouse.value = [mousePosition.x, mousePosition.y]
    u.hover.value = isHovered ? 1.0 : 0.0
  }, [intensity, speed, color, opacity, size, mousePosition, isHovered])

  return <div ref={containerRef} className={`orb-container ${className}`.trim()} />
}

export default Orb
