import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Wear the moment. Be the main character.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400"
          >
            Hyper-curated fits inspired by street, techwear, and Y2K. Ethically produced drops, size-inclusive, and built for your feed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#new"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              Shop New Drops
              <ArrowRight size={18} />
            </a>
            <a
              href="#builder"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
            >
              Build Your Fit
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 px-3 py-1 dark:border-zinc-800/60">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Carbon neutral
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 px-3 py-1 dark:border-zinc-800/60">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500" />
              Gen Z fit guarantee
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 px-3 py-1 dark:border-zinc-800/60">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Free returns
            </span>
          </motion.div>
        </div>

        {/* Visual collage */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-500/20 blur-2xl" />
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-2 aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-[linear-gradient(135deg,#0ea5e9_0%,#a21caf_100%)] bg-cover bg-center shadow-xl dark:border-zinc-800"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500 via-violet-600 to-cyan-400 shadow-xl dark:border-zinc-800"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex h-full items-center justify-center text-center text-xs font-medium text-zinc-700 dark:text-zinc-300">
                100% recycled textiles
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-2 aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-400/40 via-transparent to-cyan-400/40 shadow-xl dark:border-zinc-800"
            >
              <div className="flex h-full items-center justify-center text-center text-sm font-semibold">
                Drops every Friday 12:00
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
