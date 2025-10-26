import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const img1 = 'https://images.unsplash.com/photo-1543862470-9fdbbe0b5d44?auto=format&fit=crop&w=1200&q=80'
const img2 = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80'
const img3 = 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=80'

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Wear the moment. Be the main character.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400"
          >
            Hyper-curated fits inspired by street, techwear, and Y2K. Ethically produced drops, size-inclusive, and built for your feed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
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

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-500/20 blur-2xl" />
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="col-span-2 aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800"
            >
              <motion.img
                src={img1}
                alt="Techwear jacket editorial"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="aspect-square overflow-hidden rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800"
            >
              <motion.img
                src={img2}
                alt="Cargo streetwear detail"
                className="h-full w-full object-cover"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.25 }}
              className="aspect-square overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex h-full items-center justify-center bg-zinc-50 text-center text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                100% recycled textiles
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="col-span-2 aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800"
            >
              <motion.img
                src={img3}
                alt="Athleisure set in motion"
                className="h-full w-full object-cover"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
