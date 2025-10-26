import React, { Suspense } from 'react'
import { motion } from 'framer-motion'

// Lazy import Spline to avoid SSR/DOM issues and provide a graceful fallback
const LazySpline = React.lazy(() => import('@splinetool/react-spline').then(mod => ({ default: mod.Spline })))

export default function SplineBanner() {
  return (
    <section aria-label="Interactive 3D" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/40 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl font-semibold tracking-tight">Step into the fit lab</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Interactive 3D vibes meet street-ready silhouettes. Preview textures, movement, and color shifts in real time.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-zinc-800/60">3D Preview</span>
                <span className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-zinc-800/60">Motion Ready</span>
                <span className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-zinc-800/60">Ultra Smooth</span>
              </div>
            </div>
            <div className="relative h-[320px] w-full lg:h-[360px]">
              <Suspense
                fallback={
                  <div className="relative h-full w-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.2),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.06))]"
                      animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    />
                  </div>
                }
              >
                {/* Public example Spline scene. If network blocks, graceful fallback above shows. */}
                <LazySpline scene="https://prod.spline.design/2oVq9e7yJqM0lBoH/scene.splinecode" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
