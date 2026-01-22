import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const SaweriaButtonClass = "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hover-saweria active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"

const linearBgClass = "bg-linear-[135deg] from-linear-primary to-linear-secondary"

export { linearBgClass, SaweriaButtonClass, cn }