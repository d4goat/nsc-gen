import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SaweriaClass = "border-2 border-black shadow-saweria"
const SoftSaweriaClass = "border-2 border-black shadow-soft-saweria"
const SaweriaWithHoverClass = `${SaweriaClass} hover:shadow-hover-saweria`
const SoftSaweriaWithHoverClass = `${SoftSaweriaClass} hover:shadow-hover-soft-saweria`
const SaweriaButtonClass = `${SaweriaWithHoverClass} hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200`
const SaweriaButtonIconClass = `${SoftSaweriaWithHoverClass} hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200`
const SaweriaCardClass = `${SaweriaWithHoverClass} hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200`

const linearBgClass = "bg-linear-[135deg] from-linear-primary to-linear-secondary"

const heroBgClass = "bg-linear-[135deg] from-purple-100 via-pink-100 to-yellow-50"

export { linearBgClass, SaweriaButtonClass, cn, SaweriaCardClass, SaweriaWithHoverClass, heroBgClass, SaweriaClass, SaweriaButtonIconClass }