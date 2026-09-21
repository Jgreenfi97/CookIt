import { useMemo, useState } from 'react'
import { CourseFilter } from '../components/CourseFilter'
import { RecipeCard } from '../components/RecipeCard'
import { SearchBar } from '../components/SearchBar'
import { SurpriseButton } from '../components/SurpriseButton'
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
        recipe.winePairing.name,
        recipe.winePairing.appellation,
        ...recipe.ingredients,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, course])

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="mb-8 rounded-2xl bg-gradient-to-br from-wine-800 via-wine-900 to-black px-6 py-12 text-cream shadow-lg shadow-wine-900/20 ring-1 ring-gold-400/30 sm:px-10">
        <p className="mb-2 font-serif text-sm italic tracking-wide text-gold-300">
          Bienvenue, mes chéris
        </p>
        <h1 className="font-serif text-3xl font-bold sm:text-4xl">
          An intimate table for two
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-wine-100">
          France's most romantic recipes, each paired with a wine chosen to set
          the mood — from a candlelit first course to something sweet to linger
          over.
        </p>
        <div className="mt-6">
          <SurpriseButton />
          <p className="mt-2 text-xs text-wine-200/70">
            Can't decide? We'll choose the evening's menu for you.
          </p>
        </div>
      </section>

      <div className="mb-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>
      <div className="mb-6">
        <CourseFilter selected={course} onSelect={setCourse} />
      </div>

      <p className="mb-5 text-xs uppercase tracking-widest text-wine-400">
        {filtered.length} {filtered.length === 1 ? 'recipe' : 'recipes'}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gold-300 bg-white/50 py-16 text-center">
          <p className="font-serif text-lg italic text-wine-700">
            Nothing on the menu just yet.
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Try a different search or course.
          </p>
        </div>
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
