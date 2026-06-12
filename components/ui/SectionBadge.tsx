import { type ReactNode } from "react"

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-400 text-sm font-medium mb-6">
      {children}
    </div>
  )
}
