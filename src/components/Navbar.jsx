import React, { useState } from 'react'
import { ShoppingBag, Search, Heart, Menu, X, Moon, Sun, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const toggleDark = () => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      setDark(false)
    } else {
      root.classList.add('dark')
      setDark(true)
    }
  }

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-950/50 border-b border-zinc-200/40 dark:border-zinc-800/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="lg:hidden rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#" className="group flex items-center gap-2 font-bold tracking-tight">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/20">
              <Sparkles size={18} />
            </div>
            <span className="text-xl">HYPERTHREADS</span>
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="relative w-full max-w-lg">
            <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search drops, brands, vibes..."
              className="w-full rounded-xl border border-zinc-200 bg-white/70 pl-9 pr-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-fuchsia-500 dark:border-zinc-800 dark:bg-zinc-900/70"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
            <Heart size={18} />
            Wishlist
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
            <ShoppingBag size={18} />
            Bag
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200/50 px-4 py-3 dark:border-zinc-800/60 lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/70">
            <Search size={18} className="text-zinc-400" />
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400" placeholder="Search drops, brands, vibes..." />
          </div>
          <nav className="grid gap-2 text-sm">
            <a className="rounded-lg px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#trending">Trending</a>
            <a className="rounded-lg px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#new">New Drops</a>
            <a className="rounded-lg px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#sustainable">Sustainable</a>
            <a className="rounded-lg px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#sale">Sale</a>
          </nav>
        </div>
      )}
    </header>
  )
}
