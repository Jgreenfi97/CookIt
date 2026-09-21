import { useMemo, useState } from 'react'
import { CourseFilter } from '../components/CourseFilter'
import { RecipeCard } from '../components/RecipeCard'
import { SearchBar } from '../components/SearchBar'
import { recipes } from '../data/recipes'

export function HomePage() {
  const [query, setQuery] = useState('')
  const [course, setCourse] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return recipes.filter((recipe) => {
      const matchesCourse = course === null || recipe.course === course
      if (!matchesCourse) return false
      if (!q) return true
      const haystack = [
        recipe.title,
        recipe.frenchTitle,
        recipe.region,
        recipe.description,
        ...recipe.ingredients,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, course])

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-rose-700 to-rose-900 px-6 py-10 text-white shadow-md">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
          Bienvenue à CookIt
        </h2>
        <p className="mt-2 max-w-xl text-rose-100">
          A curated collection of France's most beloved recipes — from bistro
          classics to patisserie staples — with clear ingredients and steps
          for every home cook.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={query} onChange={setQuery} />
      </div>
      <div className="mb-8">
        <CourseFilter selected={course} onSelect={setCourse} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-stone-500">
          No recipes found. Try a different search or course.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}
