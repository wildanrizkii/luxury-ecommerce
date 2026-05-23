"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: window,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Detect native scrollbar click: pointerdown outside the content area (scrollbar area)
    // When user clicks the browser scrollbar, stop Lenis animation to prevent glitch
    const handlePointerDown = (e: PointerEvent) => {
      // Scrollbar is outside document.documentElement.clientWidth
      if (e.clientX > document.documentElement.clientWidth || e.clientY > document.documentElement.clientHeight) {
        lenis.stop()
      }
    }

    const handlePointerUp = () => {
      // Re-enable Lenis after native scroll interaction ends
      // Small delay to let the browser finish its native scroll
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.start()
        }
      }, 100)
    }

    window.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("pointerup", handlePointerUp)

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerup", handlePointerUp)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
