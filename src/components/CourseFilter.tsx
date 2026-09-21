import { courses } from '../data/recipes'

const styles = {
  active: 'bg-wine-700 text-cream border-wine-700',
  idle: 'border-gold-300 bg-white text-wine-700 hover:border-wine-300 hover:bg-gold-100/40',
}

export function CourseFilter({
  selected,
  onSelect,
}: {
  selected: string | null
  onSelect: (course: string | null) => void
}) {
  const options: Array<{ label: string; value: string | null }> = [
    { label: 'All', value: null },
    ...courses.map((c) => ({ label: c, value: c as string | null })),
  ]

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by course">
      {options.map(({ label, value }) => (
        <button
          key={label}
          type="button"
          onClick={() => onSelect(value)}
          aria-pressed={selected === value}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            selected === value ? styles.active : styles.idle
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
