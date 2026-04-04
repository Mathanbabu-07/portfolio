import { useState, useEffect } from 'react'

const TypingEffect = ({ strings = [], speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (strings.length === 0) return

    const currentString = strings[currentIndex]

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % strings.length)
        return
      }
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, deleteSpeed)
      return () => clearTimeout(timeout)
    }

    if (displayText.length === currentString.length) {
      setIsPaused(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentString.slice(0, displayText.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, isPaused, strings, speed, deleteSpeed, pauseTime])

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
        {displayText}
      </span>
      <span className="typing-cursor" />
    </span>
  )
}

export default TypingEffect
