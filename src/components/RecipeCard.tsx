import { Link } from 'react-router-dom'
import type { Recipe } from '../types/recipe'

const courseColors: Record<Recipe['course'], string> = {
  Starter: 'bg-amber-100 text-amber-800',
  Main: 'bg-rose-100 text-rose-800',
  Side: 'bg-emerald-100 text-emerald-800',
  Dessert: 'bg-fuchsia-100 text-fuchsia-800',
  Baking: 'bg-sky-100 text-sky-800',
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${courseColors[recipe.course]}`}
          >
            {recipe.course}
          </span>
          <span className="text-xs text-stone-400">{recipe.region}</span>
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-stone-900 group-hover:text-rose-700">
            {recipe.title}
          </h3>
          <p className="text-sm italic text-stone-500">{recipe.frenchTitle}</p>
        </div>
        <p className="line-clamp-2 text-sm text-stone-600">{recipe.description}</p>
        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-stone-500">
          <span>⏱ {recipe.prepMinutes + recipe.cookMinutes} min</span>
          <span>👥 {recipe.servings} servings</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  )
}
