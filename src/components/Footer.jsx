import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">About</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              HYPERTHREADS is a next-gen fashion superstore blending techwear, streetwear, and Y2K energy with ethical sourcing.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a className="hover:underline" href="#new">New Drops</a></li>
              <li><a className="hover:underline" href="#trending">Trending</a></li>
              <li><a className="hover:underline" href="#sustainable">Sustainable</a></li>
              <li><a className="hover:underline" href="#sale">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Stay in the loop</h3>
            <form className="mt-2 flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="Email for secret drops"
                className="flex-1 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-fuchsia-500 dark:border-zinc-800 dark:bg-zinc-900/70"
              />
              <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/60 pt-6 text-xs text-zinc-500 dark:border-zinc-800/60 sm:flex-row">
          <p>© {new Date().getFullYear()} HYPERTHREADS. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
