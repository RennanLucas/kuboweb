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
    if (!isVisible) return

    if (isMobile && delayMs > 0) {
      const timeout = window.setTimeout(() => setShouldLoad(true), delayMs)
      return () => window.clearTimeout(timeout)
    }

    setShouldLoad(true)
  }, [isVisible, isMobile, delayMs])

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
