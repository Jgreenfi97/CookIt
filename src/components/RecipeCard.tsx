import { Link } from 'react-router-dom'
import type { Recipe } from '../types/recipe'

const courseColors: Record<Recipe['course'], string> = {
  Starter: 'bg-gold-100 text-gold-700',
  Main: 'bg-wine-100 text-wine-700',
  Side: 'bg-emerald-100 text-emerald-800',
  Dessert: 'bg-fuchsia-100/70 text-fuchsia-900',
  Baking: 'bg-orange-100 text-orange-800',
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gold-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-wine-900/5"
    >
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${courseColors[recipe.course]}`}
          >
            {recipe.course}
          </span>
          <span className="text-xs text-wine-400">{recipe.region}</span>
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-wine-900 group-hover:text-wine-700">
            {recipe.title}
          </h3>
          <p className="font-serif text-sm italic text-gold-700">{recipe.frenchTitle}</p>
        </div>
        <p className="line-clamp-2 text-sm text-stone-600">{recipe.description}</p>
        <div className="flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs text-wine-700">
          <span>🍷</span>
          <span className="italic">{recipe.winePairing.name}</span>
        </div>
        <div className="mt-auto flex items-center gap-4 pt-1 text-xs text-stone-500">
          <span>⏱ {recipe.prepMinutes + recipe.cookMinutes} min</span>
          <span>👥 {recipe.servings} servings</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  )
}
