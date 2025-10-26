import React, { useMemo, useState } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Neo Puffer Jacket',
    price: 129,
    rating: 4.7,
    category: 'Techwear',
    tag: 'Viral',
    color: 'from-zinc-900 to-zinc-700',
  },
  {
    id: 2,
    name: 'Cloud Cargo Pants',
    price: 79,
    rating: 4.5,
    category: 'Streetwear',
    tag: 'New',
    color: 'from-slate-900 to-slate-700',
  },
  {
    id: 3,
    name: 'Tempo Seamless Set',
    price: 69,
    rating: 4.8,
    category: 'Athleisure',
    tag: 'Restock',
    color: 'from-fuchsia-700 to-fuchsia-500',
  },
  {
    id: 4,
    name: 'Holo Mesh Tee',
    price: 39,
    rating: 4.2,
    category: 'Y2K',
    tag: 'Limited',
    color: 'from-cyan-700 to-cyan-500',
  },
  {
    id: 5,
    name: 'Aura Minimal Hoodie',
    price: 89,
    rating: 4.9,
    category: 'Minimal',
    tag: 'Sustainable',
    color: 'from-zinc-800 to-zinc-600',
  },
  {
    id: 6,
    name: 'Ripple Parachute Skirt',
    price: 59,
    rating: 4.4,
    category: 'Y2K',
    tag: 'Viral',
    color: 'from-violet-700 to-violet-500',
  },
  {
    id: 7,
    name: 'Flux Trail Runners',
    price: 110,
    rating: 4.6,
    category: 'Athleisure',
    tag: 'New',
    color: 'from-emerald-700 to-emerald-500',
  },
  {
    id: 8,
    name: 'Slate Carpenter Denim',
    price: 99,
    rating: 4.3,
    category: 'Streetwear',
    tag: 'Restock',
    color: 'from-sky-700 to-sky-500',
  },
]

const categories = ['All', 'Streetwear', 'Athleisure', 'Techwear', 'Y2K', 'Minimal']

export default function ProductGrid() {
  const [active, setActive] = useState('All')
  const [wishlist, setWishlist] = useState(new Set())

  const filtered = useMemo(() => {
    if (active === 'All') return products
    return products.filter((p) => p.category === active)
  }, [active])

  const toggleWish = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section id="trending" className="py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Trending now</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Curated picks ripped straight from your FYP.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 p-1 dark:border-zinc-800 dark:bg-zinc-900/60">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-3 py-1 text-xs transition ${
                active === cat
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto md:hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs ${
              active === cat
                ? 'border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900'
                : 'border-zinc-200 bg-white/70 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((p, idx) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <div className={`relative aspect-[4/5] w-full bg-gradient-to-br ${p.color}`}>
              <div className="absolute left-3 top-3 flex gap-2">
                <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-900 shadow dark:bg-zinc-100">
                  {p.tag}
                </span>
              </div>
              <button
                onClick={() => toggleWish(p.id)}
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-zinc-900 shadow transition hover:scale-105 active:scale-95 dark:bg-zinc-100"
                aria-label="Wishlist"
              >
                <Heart size={16} className={wishlist.has(p.id) ? 'fill-zinc-900 text-zinc-900' : ''} />
              </button>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold leading-tight">{p.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-xs text-amber-500">
                    <Star size={14} className="fill-amber-500 text-amber-500" />
                    <span>{p.rating}</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{p.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${p.price}</div>
                </div>
              </div>
              <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm transition hover:bg-zinc-100 group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
                <ShoppingBag size={16} />
                Add to bag
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex items-center justify-center">
        <a href="#" className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
          View all products
        </a>
      </div>
    </section>
  )
}
