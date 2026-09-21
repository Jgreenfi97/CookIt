import { courses } from '../data/recipes'

export function CourseFilter({
  selected,
  onSelect,
}: {
  selected: string | null
  onSelect: (course: string | null) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
          selected === null
            ? 'bg-wine-700 text-cream'
            : 'border border-gold-300 bg-white text-wine-700 hover:border-wine-300'
        }`}
      >
        All
      </button>
      {courses.map((course) => (
        <button
          key={course}
          onClick={() => onSelect(course)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            selected === course
              ? 'bg-wine-700 text-cream'
              : 'border border-gold-300 bg-white text-wine-700 hover:border-wine-300'
          }`}
        >
          {course}
        </button>
      ))}
    </div>
  )
}
