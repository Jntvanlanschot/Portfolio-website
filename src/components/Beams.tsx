'use client'

import { useRef, useEffect, useState } from 'react'
import { Renderer, Program, Triangle, Mesh } from 'ogl'

interface BeamsProps {
  className?: string
  intensity?: number
  speed?: number
  color?: string
  opacity?: number
  numBeams?: number
  beamWidth?: number
  beamHeight?: number
  animation?: 'pulse' | 'slide' | 'rotate'
  trigger?: 'onMount' | 'onScroll' | 'onHover'
}

const Beams = ({
  className = '',
  intensity = 1.0,
  speed = 1.0,
  color = '#6c63ff',
  opacity = 0.3,
  numBeams = 8,
  beamWidth = 2,
  beamHeight = 200,
  animation = 'pulse',
  trigger = 'onMount'
}: BeamsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<any>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const cleanupFunctionRef = useRef<(() => void) | null>(null)
  const [isVisible, setIsVisible] = useState(false)
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
    if (trigger === 'onHover' && containerRef.current) {
      const handleMouseEnter = () => setIsHovered(true)
      const handleMouseLeave = () => setIsHovered(false)

      const container = containerRef.current
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [trigger])

  useEffect(() => {
    const shouldRender = 
      (trigger === 'onMount') ||
      (trigger === 'onScroll' && isVisible) ||
      (trigger === 'onHover' && isHovered)

    if (!shouldRender || !containerRef.current) return

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
        uniform float numBeams;
        uniform float beamWidth;
        uniform float beamHeight;
        uniform float animation;

        varying vec2 vUv;

        // Function from Iñigo Quiles
        // https://www.shadertoy.com/view/MsSGWG
        float fractalNoise(vec2 p) {
          float f = 0.0;
          f += 0.5000 * noise(p); p = p * 2.02;
          f += 0.2500 * noise(p); p = p * 2.03;
          f += 0.1250 * noise(p); p = p * 2.01;
          f += 0.0625 * noise(p); p = p * 2.04;
          return f / 0.9375;
        }

        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
          vec2 uv = fragCoord / iResolution.xy;
          vec2 center = 0.5 * iResolution.xy;
          float dist = distance(fragCoord, center);

          // Animate noise
          vec2 noiseUV = uv * intensity + iTime * speed * 0.05;
          float n = fractalNoise(noiseUV);

          // Create a gradient from the center
          float gradient = 1.0 - smoothstep(0.0, 0.7, dist / max(iResolution.x, iResolution.y));
          gradient = pow(gradient, 0.5); // Soften the gradient

          // Combine noise and gradient
          float finalAlpha = mix(0.0, n, gradient);

          // Apply overall opacity
          finalAlpha *= opacity;

          fragColor = vec4(color, finalAlpha);
        }

        void main() {
          vec4 color;
          mainImage(color, gl_FragCoord.xy);
          gl_FragColor = color;
        }`

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        intensity: { value: intensity },
        speed: { value: speed },
        color: { value: hexToRgb(color) },
        opacity: { value: opacity },
        numBeams: { value: numBeams },
        beamWidth: { value: beamWidth },
        beamHeight: { value: beamHeight },
        animation: { value: animation === 'pulse' ? 0.0 : animation === 'slide' ? 1.0 : 2.0 }
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
    isHovered,
    trigger,
    intensity,
    speed,
    color,
    opacity,
    numBeams,
    beamWidth,
    beamHeight,
    animation
  ])

  useEffect(() => {
    if (!uniformsRef.current) return

    const u = uniformsRef.current
    u.intensity.value = intensity
    u.speed.value = speed
    u.color.value = hexToRgb(color)
    u.opacity.value = opacity
    u.numBeams.value = numBeams
    u.beamWidth.value = beamWidth
    u.beamHeight.value = beamHeight
    u.animation.value = animation === 'pulse' ? 0.0 : animation === 'slide' ? 1.0 : 2.0
  }, [intensity, speed, color, opacity, numBeams, beamWidth, beamHeight, animation])

  return <div ref={containerRef} className={`beams-container ${className}`.trim()} />
}

export default Beams

