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

    const cores = navigator.hardwareConcurrency ?? 4
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
    const isLowEndMobile = isMobile && (cores <= 4 || deviceMemory <= 4)

    const baseWaitTime = isMobile ? Math.max(delayMs, 2200) : Math.max(delayMs, 800)
    const waitTime = isLowEndMobile ? baseWaitTime + 1800 : baseWaitTime

    const scheduleLoad = () => {
      const timeout = window.setTimeout(() => setShouldLoad(true), waitTime)
      return () => window.clearTimeout(timeout)
    }

    if ('requestIdleCallback' in window && isMobile) {
      const idleId = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number; cancelIdleCallback: (id: number) => void }).requestIdleCallback(
        () => {
          setShouldLoad(true)
        },
        { timeout: waitTime }
      )

      return () => {
        ;(window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId)
      }
    }

    return scheduleLoad()
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
