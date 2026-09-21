import { Link, useParams } from 'react-router-dom'
import { recipes } from '../data/recipes'

export function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const recipe = recipes.find((r) => r.slug === slug)

  if (!recipe) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg text-stone-600">Recipe not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-wine-700 underline underline-offset-2"
        >
          Back to all recipes
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-wine-500 hover:text-wine-700"
      >
        ← Back to all recipes
      </Link>

      <div className="rounded-2xl border border-gold-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-wine-900">
              {recipe.title}
            </h1>
            <p className="mt-1 font-serif italic text-gold-700">{recipe.frenchTitle}</p>
          </div>
          <span className="shrink-0 rounded-full bg-wine-100 px-3 py-1 text-xs font-medium text-wine-800">
            {recipe.course}
          </span>
        </div>

        <p className="mt-4 text-stone-600">{recipe.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-cream p-4 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-wine-400">Region</dt>
            <dd className="font-medium text-wine-900">{recipe.region}</dd>
          </div>
          <div>
            <dt className="text-wine-400">Prep</dt>
            <dd className="font-medium text-wine-900">{recipe.prepMinutes} min</dd>
          </div>
          <div>
            <dt className="text-wine-400">Cook</dt>
            <dd className="font-medium text-wine-900">{recipe.cookMinutes} min</dd>
          </div>
          <div>
            <dt className="text-wine-400">Servings</dt>
            <dd className="font-medium text-wine-900">{recipe.servings}</dd>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-gold-300 bg-gradient-to-br from-wine-900 to-wine-800 p-5 text-cream shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
            <span>🍷</span>
            <span>Suggested pairing</span>
          </div>
          <p className="mt-2 font-serif text-xl italic text-cream">
            {recipe.winePairing.name}
          </p>
          <p className="text-sm text-gold-300">{recipe.winePairing.appellation}</p>
          <p className="mt-2 text-sm text-wine-100">{recipe.winePairing.note}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-serif text-lg font-semibold text-wine-900">
              Ingredients
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2">
                  <span className="text-gold-600">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-lg font-semibold text-wine-900">
              Instructions
            </h2>
            <ol className="mt-3 space-y-4 text-sm text-stone-700">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wine-700 text-xs font-semibold text-cream">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
