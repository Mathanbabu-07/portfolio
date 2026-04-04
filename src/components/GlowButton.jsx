import { useRef, useCallback } from 'react'

const GlowButton = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const btnRef = useRef(null)

  const handleRipple = useCallback((e) => {
    const btn = btnRef.current
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    if (onClick) onClick(e)
  }, [onClick])

  const handleMouseMove = useCallback((e) => {
    const btn = btnRef.current
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    btn.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const btn = btnRef.current
    btn.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }, [])

  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    contact: 'btn-contact',
  }[variant]

  const Tag = href ? 'a' : 'button'
  const linkProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}

  return (
    <Tag
      ref={btnRef}
      className={`${variantClass} ${className}`}
      onClick={handleRipple}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...linkProps}
    >
      {children}
    </Tag>
  )
}

export default GlowButton
