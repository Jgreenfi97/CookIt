import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SurpriseButton } from '../components/SurpriseButton'
import {
  ArrowLeftIcon,
  ClockIcon,
  ServingsIcon,
  WineGlassIcon,
} from '../components/icons'
import { recipes } from '../data/recipes'
import { NotFoundPage } from './NotFoundPage'

export function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const recipe = recipes.find((r) => r.slug === slug)

  useEffect(() => {
    if (!recipe) return
    document.title = `${recipe.title} — CookIt`
    return () => {
      document.title = 'CookIt — French Recipes'
    }
  }, [recipe])

  if (!recipe) return <NotFoundPage />

  const totalMinutes = recipe.prepMinutes + recipe.cookMinutes

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-wine-500 transition-colors hover:text-wine-700"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to all recipes
      </Link>

      <article className="rounded-2xl border border-gold-200 bg-white p-6 shadow-sm sm:p-9">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold leading-tight text-wine-900 sm:text-4xl">
              {recipe.title}
            </h1>
            <p className="mt-1.5 font-serif text-lg italic text-gold-700">
              {recipe.frenchTitle}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-wine-100 px-3 py-1 text-xs font-medium text-wine-800">
            {recipe.course}
          </span>
        </header>

        <p className="mt-5 leading-relaxed text-stone-600">{recipe.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-cream p-5 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wider text-wine-400">Region</dt>
            <dd className="mt-0.5 font-medium text-wine-900">{recipe.region}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-wine-400">Total</dt>
            <dd className="mt-0.5 inline-flex items-center gap-1.5 font-medium text-wine-900">
              <ClockIcon className="h-4 w-4 text-gold-600" />
              {totalMinutes} min
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-wine-400">Serves</dt>
            <dd className="mt-0.5 inline-flex items-center gap-1.5 font-medium text-wine-900">
              <ServingsIcon className="h-4 w-4 text-gold-600" />
              {recipe.servings}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-wine-400">Level</dt>
            <dd className="mt-0.5 font-medium text-wine-900">{recipe.difficulty}</dd>
          </div>
        </dl>

        <aside className="mt-6 rounded-xl border border-gold-300/50 bg-gradient-to-br from-wine-900 to-wine-800 p-6 text-cream shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
            <WineGlassIcon className="h-4 w-4" />
            <span>Suggested pairing</span>
          </div>
          <p className="mt-3 font-serif text-xl italic text-cream">
            {recipe.winePairing.name}
          </p>
          <p className="mt-0.5 text-sm text-gold-300">
            {recipe.winePairing.appellation}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-wine-100">
            {recipe.winePairing.note}
          </p>
        </aside>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-[1fr_1.7fr]">
          <section>
            <h2 className="border-b border-gold-200 pb-2 font-serif text-lg font-semibold text-wine-900">
              Ingredients
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-700">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-gold-500">
                    •
                  </span>
                  <span className="leading-relaxed">{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="border-b border-gold-200 pb-2 font-serif text-lg font-semibold text-wine-900">
              Instructions
            </h2>
            <ol className="mt-4 space-y-4 text-sm text-stone-700">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wine-700 font-serif text-xs font-semibold text-cream">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>

      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <SurpriseButton
          variant="onLight"
          label="Pour me another"
          excludeSlug={recipe.slug}
        />
        <p className="text-xs text-wine-400">
          Not quite the mood? Let us pick again.
        </p>
      </div>
    </div>
  )
}
