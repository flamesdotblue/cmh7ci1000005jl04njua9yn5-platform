import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, Trash2, Layers, Save, Wand2 } from 'lucide-react'

const catalog = [
  {
    id: 'top-neo-tech',
    label: 'Neo Puffer',
    type: 'Top',
    src: 'https://images.unsplash.com/photo-1543862470-9fdbbe0b5d44?auto=format&fit=crop&w=800&q=80',
    w: 220,
  },
  {
    id: 'top-mesh',
    label: 'Holo Mesh Tee',
    type: 'Top',
    src: 'https://images.unsplash.com/photo-1548883354-1a3c84b71b39?auto=format&fit=crop&w=800&q=80',
    w: 220,
  },
  {
    id: 'bottom-cargo',
    label: 'Cloud Cargo',
    type: 'Bottom',
    src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    w: 220,
  },
  {
    id: 'bottom-skirt',
    label: 'Parachute Skirt',
    type: 'Bottom',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    w: 220,
  },
  {
    id: 'shoes-trail',
    label: 'Flux Runners',
    type: 'Shoes',
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    w: 200,
  },
  {
    id: 'hoodie-min',
    label: 'Aura Hoodie',
    type: 'Top',
    src: 'https://images.unsplash.com/photo-1542060748-10c28b62716d?auto=format&fit=crop&w=800&q=80',
    w: 220,
  },
]

function Mannequin() {
  return (
    <svg viewBox="0 0 200 520" className="h-full w-auto">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#a855f7"/>
        </linearGradient>
      </defs>
      <g opacity="0.2" fill="url(#g)">
        <circle cx="100" cy="48" r="36" />
        <rect x="60" y="84" width="80" height="120" rx="22" />
        <rect x="68" y="206" width="28" height="120" rx="16" />
        <rect x="104" y="206" width="28" height="120" rx="16" />
        <rect x="68" y="328" width="30" height="150" rx="16" />
        <rect x="102" y="328" width="30" height="150" rx="16" />
      </g>
    </svg>
  )
}

export default function OutfitBuilder() {
  const stageRef = useRef(null)
  const [items, setItems] = useState([])
  const [activeTab, setActiveTab] = useState('Top')

  const filtered = useMemo(() => catalog.filter((c) => c.type === activeTab), [activeTab])

  const addItem = (c) => {
    const stage = stageRef.current
    if (!stage) return
    const rect = stage.getBoundingClientRect()
    const centerX = rect.width / 2 - c.w / 2
    const centerY = rect.height / 3
    setItems((prev) => [
      ...prev,
      {
        id: `${c.id}-${Date.now()}`,
        catalogId: c.id,
        src: c.src,
        x: centerX,
        y: centerY,
        r: 0,
        w: c.w,
        z: prev.length + 1,
        label: c.label,
        type: c.type,
      },
    ])
  }

  const bringForward = (id) => {
    setItems((prev) => {
      const maxZ = Math.max(...prev.map((p) => p.z), 0)
      return prev.map((p) => (p.id === id ? { ...p, z: maxZ + 1 } : p))
    })
  }

  const rotateItem = (id, delta = 15) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, r: p.r + delta } : p)))
  }

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))
  const reset = () => setItems([])

  return (
    <section id="builder" className="py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Build your fit</h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Drag pieces onto the mannequin. Layer, rotate, vibe.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
            <RotateCw size={16} /> Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Palette */}
        <div className="order-2 lg:order-1 lg:col-span-4">
          <div className="mb-3 flex w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/60 p-1 dark:border-zinc-800 dark:bg-zinc-900/60">
            {['Top', 'Bottom', 'Shoes'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`rounded-full px-3 py-1 text-xs transition ${activeTab === t ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {filtered.map((c) => (
              <motion.button
                key={c.id}
                onClick={() => addItem(c)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -1 }}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white/70 p-2 text-left text-xs shadow-sm hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={c.src} alt={c.label} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium">{c.label}</span>
                  <span className="text-[10px] text-zinc-500">{c.type}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-zinc-200 bg-white/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="mb-2 flex items-center gap-2 font-semibold"><Wand2 size={14}/> Pro tip</div>
            <p className="text-zinc-600 dark:text-zinc-400">Click a piece on the canvas to rotate, bring to front, or delete. Drag to position. Try layering tops over bottoms for depth.</p>
          </div>
        </div>

        {/* Stage */}
        <div className="order-1 lg:order-2 lg:col-span-8">
          <div
            ref={stageRef}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 shadow-xl dark:border-zinc-800"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -right-32 -bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            </div>
            <div className="pointer-events-none absolute inset-y-6 left-8 hidden w-32 items-center justify-center lg:flex">
              <Mannequin />
            </div>

            {/* Droppable canvas center */}
            <div className="absolute inset-0">
              {items
                .slice()
                .sort((a, b) => a.z - b.z)
                .map((it) => (
                  <DraggableItem key={it.id} item={it} onChange={setItems} onRotate={rotateItem} onFront={bringForward} onRemove={removeItem} />
                ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3">
              <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white backdrop-blur">Drag items here</div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-end gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
              <Save size={16} /> Save look (PNG soon)
            </button>
            <div className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
              <Layers size={16} /> {items.length} layers
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DraggableItem({ item, onChange, onRotate, onFront, onRemove }) {
  const { id, src, x, y, r, w, z, label } = item

  const update = (patch) => {
    onChange((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  }

  return (
    <motion.div
      className="group absolute cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      dragElastic={0.05}
      onDragEnd={(e, info) => update({ x: info.point.x - info.offset.x, y: info.point.y - info.offset.y })}
      style={{ left: x, top: y, rotate: r, zIndex: z, width: w }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseDown={() => onFront(id)}
    >
      <div className="relative select-none overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10">
        <img src={src} alt={label} className="block h-auto w-full object-cover" draggable={false} />
        <div className="absolute inset-x-0 top-0 hidden items-center justify-between gap-1 p-1 opacity-0 transition group-hover:flex group-hover:opacity-100">
          <button onClick={() => onRotate(id, -10)} className="rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium text-zinc-900 hover:bg-white">-10°</button>
          <div className="rounded-md bg-white/80 px-2 py-1 text-[10px] font-semibold text-zinc-900">{label}</div>
          <button onClick={() => onRotate(id, 10)} className="rounded-md bg-white/80 px-2 py-1 text-[10px] font-medium text-zinc-900 hover:bg-white">+10°</button>
        </div>
        <div className="absolute inset-x-1 bottom-1 flex items-center justify-end gap-1 opacity-0 transition group-hover:opacity-100">
          <button onClick={() => onFront(id)} className="rounded-md bg-white/80 px-2 py-1 text-[10px] text-zinc-900 hover:bg-white">Front</button>
          <button onClick={() => onRemove(id)} className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-1 text-[10px] text-red-600 hover:bg-white"><Trash2 size={12}/>Delete</button>
        </div>
      </div>
    </motion.div>
  )
}
