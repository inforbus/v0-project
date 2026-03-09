"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    )
    if (ref.current) observer.observe(ref.current)
    const fallbackTimer = setTimeout(() => setIsVisible(true), 1500 + delay)
    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [delay])

  const getTransformClass = () => {
    if (isVisible) return "translate-y-0 translate-x-0 opacity-100"
    if (direction === "left") return "-translate-x-20 opacity-0"
    if (direction === "right") return "translate-x-20 opacity-0"
    return "translate-y-8 opacity-0"
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  )
}
