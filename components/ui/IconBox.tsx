import { type LucideIcon } from "lucide-react"

const sizes = {
  sm: { box: "w-10 h-10 rounded-lg", iconSize: 18 },
  md: { box: "w-11 h-11 rounded-xl", iconSize: 20 },
  lg: { box: "w-12 h-12 rounded-xl", iconSize: 22 },
}

export function IconBox({
  icon: Icon,
  size = "md",
}: {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
}) {
  const { box, iconSize } = sizes[size]
  return (
    <div
      className={`${box} bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300`}
    >
      <Icon size={iconSize} className="text-accent" />
    </div>
  )
}
