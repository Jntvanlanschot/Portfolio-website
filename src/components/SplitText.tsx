'use client'

import { useEffect, useRef, useState } from 'react'

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'center'
  trigger?: 'onMount' | 'onScroll' | 'onHover'
  splitBy?: 'char' | 'word' | 'line'
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier'
}

const SplitText = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.05,
  direction = 'up',
  trigger = 'onMount',
  splitBy = 'char',
  easing = 'cubic-bezier'
}: SplitTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  const getEasingFunction = () => {
    switch (easing) {
      case 'ease': return 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      case 'ease-in': return 'cubic-bezier(0.42, 0, 1, 1)'
      case 'ease-out': return 'cubic-bezier(0, 0, 0.58, 1)'
      case 'ease-in-out': return 'cubic-bezier(0.42, 0, 0.58, 1)'
      default: return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  }

  const getTransform = (dir: string) => {
    switch (dir) {
      case 'up': return 'translateY(100%)'
      case 'down': return 'translateY(-100%)'
      case 'left': return 'translateX(100%)'
      case 'right': return 'translateX(-100%)'
      case 'center': return 'scale(0)'
      default: return 'translateY(100%)'
    }
  }

  const getFinalTransform = (dir: string) => {
    switch (dir) {
      case 'up': return 'translateY(0)'
      case 'down': return 'translateY(0)'
      case 'left': return 'translateX(0)'
      case 'right': return 'translateX(0)'
      case 'center': return 'scale(1)'
      default: return 'translateY(0)'
    }
  }

  useEffect(() => {
    if (!textRef.current) return

    const text = textRef.current
    let elements: string[] = []
    
    // Split text based on splitBy option
    if (splitBy === 'word') {
      elements = text.textContent?.split(/\s+/) || []
    } else if (splitBy === 'line') {
      elements = text.textContent?.split('\n') || []
    } else {
      elements = text.textContent?.split('') || []
    }
    
    // Clear the text content
    text.textContent = ''
    
    // Create spans for each element
    elements.forEach((element, index) => {
      const elementSpan = document.createElement('span')
      
      if (splitBy === 'word') {
        elementSpan.textContent = element
        elementSpan.style.display = 'inline-block'
        elementSpan.style.marginRight = '0.25em'
      } else if (splitBy === 'line') {
        elementSpan.textContent = element
        elementSpan.style.display = 'block'
      } else {
        elementSpan.textContent = element === ' ' ? '\u00A0' : element
        elementSpan.style.display = 'inline-block'
      }
      
      elementSpan.style.transform = getTransform(direction)
      elementSpan.style.opacity = '0'
      elementSpan.style.transition = `transform ${duration}s ${getEasingFunction()} ${delay + index * stagger}s, opacity ${duration}s ${getEasingFunction()} ${delay + index * stagger}s`
      elementSpan.style.willChange = 'transform, opacity'
      elementSpan.style.backfaceVisibility = 'hidden'
      elementSpan.style.perspective = '1000px'
      
      text.appendChild(elementSpan)
    })

    // Set up intersection observer for scroll trigger
    if (trigger === 'onScroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isAnimated) {
              setIsVisible(true)
              setIsAnimated(true)
              observer.unobserve(entry.target)
            }
          })
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )
      observer.observe(text)
      return () => observer.disconnect()
    } else if (trigger === 'onMount') {
      setIsVisible(true)
      setIsAnimated(true)
    }
  }, [children, delay, duration, stagger, direction, trigger, splitBy, easing, isAnimated])

  useEffect(() => {
    if (!textRef.current) return

    const elementSpans = textRef.current.querySelectorAll('span')
    
    if (trigger === 'onHover') {
      elementSpans.forEach((span, index) => {
        if (isHovered) {
          setTimeout(() => {
            span.style.transform = getFinalTransform(direction)
            span.style.opacity = '1'
          }, index * stagger * 1000)
        } else {
          setTimeout(() => {
            span.style.transform = getTransform(direction)
            span.style.opacity = '0'
          }, index * stagger * 1000)
        }
      })
    } else if (isVisible) {
      elementSpans.forEach((span, index) => {
        setTimeout(() => {
          span.style.transform = getFinalTransform(direction)
          span.style.opacity = '1'
        }, (delay + index * stagger) * 1000)
      })
    }
  }, [isVisible, isHovered, direction, stagger, delay, trigger])

  const handleMouseEnter = () => {
    if (trigger === 'onHover') {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (trigger === 'onHover') {
      setIsHovered(false)
    }
  }

  return (
    <span 
      ref={textRef} 
      className={`split-text-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        overflow: 'hidden'
      }}
    >
      {children}
    </span>
  )
}

export default SplitText
