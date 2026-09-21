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
          className="mt-4 inline-block text-rose-700 underline underline-offset-2"
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
        className="mb-6 inline-flex items-center gap-1 text-sm text-stone-500 hover:text-rose-700"
      >
        ← Back to all recipes
      </Link>

      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-stone-900">
              {recipe.title}
            </h1>
            <p className="mt-1 italic text-stone-500">{recipe.frenchTitle}</p>
          </div>
          <span className="shrink-0 rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-800">
            {recipe.course}
          </span>
        </div>

        <p className="mt-4 text-stone-600">{recipe.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-stone-50 p-4 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-stone-400">Region</dt>
            <dd className="font-medium text-stone-800">{recipe.region}</dd>
          </div>
          <div>
            <dt className="text-stone-400">Prep</dt>
            <dd className="font-medium text-stone-800">{recipe.prepMinutes} min</dd>
          </div>
          <div>
            <dt className="text-stone-400">Cook</dt>
            <dd className="font-medium text-stone-800">{recipe.cookMinutes} min</dd>
          </div>
          <div>
            <dt className="text-stone-400">Servings</dt>
            <dd className="font-medium text-stone-800">{recipe.servings}</dd>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-serif text-lg font-semibold text-stone-900">
              Ingredients
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2">
                  <span className="text-rose-600">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-lg font-semibold text-stone-900">
              Instructions
            </h2>
            <ol className="mt-3 space-y-4 text-sm text-stone-700">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-700 text-xs font-semibold text-white">
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
