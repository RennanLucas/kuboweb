'use client'

import { Suspense, lazy, useState, useEffect, useRef } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  delayMs?: number
}

export function SplineScene({ scene, className, delayMs = 0 }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setHasUserInteracted(true)
      return
    }

    const activate = () => setHasUserInteracted(true)

    window.addEventListener('touchstart', activate, { once: true, passive: true })
    window.addEventListener('scroll', activate, { once: true, passive: true })

    return () => {
      window.removeEventListener('touchstart', activate)
      window.removeEventListener('scroll', activate)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isVisible) return

    const cores = navigator.hardwareConcurrency ?? 4
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
    const isLowEndMobile = isMobile && (cores <= 4 || deviceMemory <= 4)

    if (isLowEndMobile && !hasUserInteracted) return

    const baseWaitTime = isMobile ? Math.max(delayMs, 2400) : Math.max(delayMs, 800)
    const waitTime = isLowEndMobile ? baseWaitTime + 1200 : baseWaitTime

    const timeoutId = window.setTimeout(() => {
      setShouldLoad(true)
    }, waitTime)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isVisible, isMobile, delayMs, hasUserInteracted])

  return (
    <div ref={ref} className={className} style={{ width: '100%', height: '100%' }}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
