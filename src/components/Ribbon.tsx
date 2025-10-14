'use client'

import { useEffect, useRef, useState } from 'react'

interface RibbonProps {
  children: React.ReactNode
  className?: string
  ribbonColor?: string
  direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'small' | 'medium' | 'large'
  animation?: 'scale' | 'slide' | 'fade' | 'rotate'
  delay?: number
  duration?: number
}

const Ribbon = ({ 
  children, 
  className = '', 
  ribbonColor = '#6c63ff',
  direction = 'top-right',
  size = 'medium',
  animation = 'scale',
  delay = 0,
  duration = 0.3
}: RibbonProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const getSize = () => {
    switch (size) {
      case 'small': return 'w-16 h-16'
      case 'large': return 'w-24 h-24'
      default: return 'w-20 h-20'
    }
  }

  const getRibbonPosition = () => {
    switch (direction) {
      case 'top-left':
        return 'top-0 left-0'
      case 'top-right':
        return 'top-0 right-0'
      case 'bottom-left':
        return 'bottom-0 left-0'
      case 'bottom-right':
        return 'bottom-0 right-0'
      default:
        return 'top-0 right-0'
    }
  }

  const getInitialTransform = () => {
    switch (animation) {
      case 'scale':
        return 'scale(0) rotate(45deg)'
      case 'slide':
        const slideDirection = direction.includes('right') ? 'translateX(100%)' : 
                              direction.includes('left') ? 'translateX(-100%)' :
                              direction.includes('top') ? 'translateY(-100%)' : 'translateY(100%)'
        return `${slideDirection} rotate(45deg)`
      case 'fade':
        return 'scale(1) rotate(45deg)'
      case 'rotate':
        return 'scale(0) rotate(0deg)'
      default:
        return 'scale(0) rotate(45deg)'
    }
  }

  const getHoverTransform = () => {
    switch (animation) {
      case 'scale':
        return 'scale(1) rotate(45deg)'
      case 'slide':
        return 'translateX(0) translateY(0) rotate(45deg)'
      case 'fade':
        return 'scale(1) rotate(45deg)'
      case 'rotate':
        return 'scale(1) rotate(45deg)'
      default:
        return 'scale(1) rotate(45deg)'
    }
  }

  const getInitialOpacity = () => {
    return animation === 'fade' ? '0' : '1'
  }

  const getHoverOpacity = () => {
    return '1'
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ribbon = container.querySelector('.ribbon') as HTMLElement
    if (!ribbon) return

    if (isHovered) {
      setTimeout(() => {
        ribbon.style.transform = getHoverTransform()
        ribbon.style.opacity = getHoverOpacity()
      }, delay * 1000)
    } else {
      ribbon.style.transform = getInitialTransform()
      ribbon.style.opacity = getInitialOpacity()
    }
  }, [isHovered, animation, direction, delay])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Ribbon */}
      <div 
        className={`ribbon absolute ${getRibbonPosition()} ${getSize()} transition-all duration-${Math.round(duration * 1000)} ease-out`}
        style={{
          backgroundColor: ribbonColor,
          transformOrigin: 'center',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          transform: getInitialTransform(),
          opacity: getInitialOpacity(),
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default Ribbon
