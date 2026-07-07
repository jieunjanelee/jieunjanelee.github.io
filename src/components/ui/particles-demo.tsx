"use client"

import { Particles } from "@/components/ui/particles"

// Adapted from the upstream demo: this site is a single (dark) theme, so we
// drop the `next-themes` dependency and use white particles directly.
export function ParticlesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-line bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  )
}
