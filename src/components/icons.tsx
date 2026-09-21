type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
} as const

export function WineGlassIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3h8l-.7 6.2a3.4 3.4 0 0 1-6.6 0Z" />
      <path d="M12 14v7" />
      <path d="M8.5 21h7" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  )
}

export function ServingsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 12.5h17a8.5 8.5 0 0 1-17 0Z" />
      <path d="M2.5 20h19" />
      <path d="M12 9V6" />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13 4.5 11l5.6-2Z" />
      <path d="M18.5 4v3M20 5.5h-3" />
    </svg>
  )
}

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  )
}

export function CandleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5c1.6 1.7 2.4 3 2.4 4a2.4 2.4 0 0 1-4.8 0c0-1 .8-2.3 2.4-4Z" />
      <rect x="8" y="10.5" width="8" height="11" rx="1.6" />
      <path d="M12 10.5v11" />
    </svg>
  )
}
