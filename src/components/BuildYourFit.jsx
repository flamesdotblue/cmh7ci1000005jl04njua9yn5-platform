import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Plus, Minus, RefreshCw } from 'lucide-react'

const catalog = [
  {
    id: 'outer-puffer',
    name: 'Puffer Jacket',
    src: 'https://images.unsplash.com/photo-1543862470-9fdbbe0b5d44?auto=format&fit=crop&w=800&q=80',
    category: 'Outerwear',
    init: { x: 40, y: 60, scale: 0.6, rotate: 0 },
  },
  {
    id: 'top-mesh',
    name: 'Mesh Tee',
    src: 'https://images.unsplash.com/photo-1548883354-1a3c84b71b39?auto=format&fit=crop&w=800&q=80',
    category: 'Top',
    init: { x: 200, y: 40, scale: 0.55, rotate: 0 },
  },
  {
    id: 'bottom-cargo',
    name: 'Cargo Pants',
    src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    category: 'Bottom',
    init: { x: 120, y: 160, scale: 0.6, rotate: 0 },
  },
  {
    id: 'skirt-para',
    name: 'Parachute Skirt',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    category: 'Bottom',
    init: { x: 260, y: 180, scale: 0.6, rotate: 0 },
  },
  {
    id: 'shoes-trail',
    name: 'Trail Runners',
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    category: 'Shoes',
    init: { x: 180, y: 300, scale: 0.6, rotate: -5 },
  },
  {
    id: 'hoodie-min',
    name: 'Aura Hoodie',
    src: 'https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=800&q=80',
    category: 'Top',
    init: { x: 340, y: 80, scale: 0.55, rotate: 0 },
  },
]

export default function BuildYourFit() {
  const initialItems = useMemo(
    () =>
      catalog.map((c, i) => ({
        id: c.id,
        name: c.name,
        category: c.category,
        src: c.src,
        x: c.init.x + i * 6,
        y: c.init.y + i * 4,
        scale: c.init.scale,
        rotate: c.init.rotate,
        z: i + 1,
        active: false,
      })),
    []
  )

  const [items, setItems] = useState(initialItems)
  const [selectedId, setSelectedId] = useState(null)
  const canvasRef = useRef(null)

  const onDrag = (id, info) => {
    const { point } = info
    // Convert viewport coords to canvas-relative
    const bounds = canvasRef.current?.getBoundingClientRect()
    if (!bounds) return
    const x = point.x - bounds.left
    const y = point.y - bounds.top
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, x, y } : it)))
  }

  const bringToFront = (id) => {
    setItems((prev) => {
      const maxZ = prev.reduce((m, it) => Math.max(m, it.z), 0)
      return prev.map((it) => (it.id === id ? { ...it, z: maxZ + 1 } : it))
    })
  }

  const adjust = (type) => {
    if (!selectedId) return
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== selectedId) return it
        if (type === 'scaleUp') return { ...it, scale: Math.min(it.scale + 0.05, 1.4) }
        if (type === 'scaleDown') return { ...it, scale: Math.max(it.scale - 0.05, 0.3) }
        if (type === 'rotate') return { ...it, rotate: it.rotate + 10 }
        return it
      })
    )
  }

  const reset = () => {
    setItems(initialItems)
    setSelectedId(null)
  }

  return (
    <section id="builder" className="py-14">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Build your fit</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Drag pieces onto the canvas. Resize, rotate, and layer to create your look.</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => adjust('scaleDown')} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
            <Minus size={16} />
            Scale
          </button>
          <button onClick={() => adjust('scaleUp')} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
            <Plus size={16} />
            Scale
          </button>
          <button onClick={() => adjust('rotate')} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
            <RotateCcw size={16} />
            Rotate
          </button>
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
            <RefreshCw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div
          ref={canvasRef}
          className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <div className="relative h-[480px] w-full rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(15,15,15,0.08),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_55%)]">
            {/* mannequin silhouette */}
            <svg viewBox="0 0 200 400" className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] -translate-x-1/2 -translate-y-1/2 opacity-10">
              <path d="M100 20c20 0 28 20 30 36 1 8 12 20 20 24 8 4 12 12 10 22-2 10-8 16-16 20-4 38-8 62-8 78 0 34 20 52 20 90 0 52-24 84-56 84s-56-32-56-84c0-38 20-56 20-90 0-16-4-40-8-78-8-4-14-10-16-20-2-10 2-18 10-22 8-4 19-16 20-24 2-16 10-36 30-36z" fill="currentColor" className="text-zinc-900 dark:text-white" />
            </svg>

            {items.map((it) => (
              <motion.div
                key={it.id}
                className={`absolute cursor-grab active:cursor-grabbing ${selectedId === it.id ? 'ring-2 ring-fuchsia-500' : ''} rounded-lg shadow-lg`}
                style={{ x: it.x, y: it.y, zIndex: it.z }}
                drag
                dragConstraints={canvasRef}
                onDrag={(e, info) => onDrag(it.id, info)}
                onPointerDown={() => {
                  setSelectedId(it.id)
                  bringToFront(it.id)
                }}
                whileHover={{ scale: it.scale * 1.02 }}
                whileTap={{ scale: it.scale * 0.98 }}
                animate={{ rotate: it.rotate, scale: it.scale }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <img
                  src={it.src}
                  alt={it.name}
                  className="h-28 w-28 select-none rounded-lg object-cover"
                  draggable={false}
                />
              </motion.div>
            ))}

            {/* floating hints */}
            <motion.div
              className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-900 shadow dark:bg-zinc-100"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Drag to style
            </motion.div>
            <motion.div
              className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-zinc-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              Snap within canvas
            </motion.div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/70">
            <h3 className="mb-2 text-sm font-semibold">Pieces</h3>
            <div className="grid grid-cols-3 gap-3">
              {catalog.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    // duplicate piece and drop near center
                    setItems((prev) => {
                      const maxZ = prev.reduce((m, it) => Math.max(m, it.z), 0)
                      return [
                        ...prev,
                        {
                          id: `${c.id}-${Date.now()}`,
                          name: c.name,
                          category: c.category,
                          src: c.src,
                          x: 160 + Math.random() * 60,
                          y: 120 + Math.random() * 60,
                          scale: c.init.scale,
                          rotate: 0,
                          z: maxZ + 1,
                          active: false,
                        },
                      ]
                    })
                  }}
                  className="group overflow-hidden rounded-lg border border-zinc-200 bg-white/60 p-1 text-left text-xs hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"
                >
                  <img src={c.src} alt={c.name} className="h-16 w-full rounded object-cover" />
                  <div className="mt-1 truncate px-1 text-[11px] text-zinc-600 dark:text-zinc-400">{c.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/70">
            <h3 className="mb-2 text-sm font-semibold">Selected</h3>
            {selectedId ? (
              <div className="space-y-2 text-sm">
                <div className="text-zinc-500 dark:text-zinc-400">{items.find((i) => i.id === selectedId)?.name}</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => adjust('scaleDown')} className="rounded-lg border border-zinc-200 bg-white/60 px-2 py-1 text-xs hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60">- Scale</button>
                  <button onClick={() => adjust('scaleUp')} className="rounded-lg border border-zinc-200 bg-white/60 px-2 py-1 text-xs hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60">+ Scale</button>
                  <button onClick={() => adjust('rotate')} className="rounded-lg border border-zinc-200 bg-white/60 px-2 py-1 text-xs hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60">Rotate</button>
                </div>
                <button
                  onClick={() => {
                    setItems((prev) => prev.filter((i) => i.id !== selectedId))
                    setSelectedId(null)
                  }}
                  className="mt-1 w-full rounded-lg bg-zinc-900 py-1 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  Remove piece
                </button>
              </div>
            ) : (
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Tap a piece on the canvas to edit</div>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}
