import { SearchIcon } from './icons'

export function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="relative w-full">
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-600" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search recipes"
        placeholder="Search recipes, ingredients, or regions…"
        className="w-full rounded-full border border-gold-300 bg-white py-2.5 pl-11 pr-4 text-sm text-wine-900 shadow-sm outline-none transition placeholder:text-wine-400/60 focus:border-wine-400 focus:ring-2 focus:ring-wine-100"
      />
    </div>
  )
}
