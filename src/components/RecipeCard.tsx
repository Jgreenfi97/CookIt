import { Link } from 'react-router-dom'
import type { Recipe } from '../types/recipe'
import { ClockIcon, ServingsIcon, WineGlassIcon } from './icons'

const courseColors: Record<Recipe['course'], string> = {
  Starter: 'bg-gold-100 text-gold-700',
  Main: 'bg-wine-100 text-wine-700',
  Side: 'bg-sage-100 text-sage-700',
  Dessert: 'bg-plum-100 text-plum-700',
  Baking: 'bg-terracotta-100 text-terracotta-700',
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gold-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-lg hover:shadow-wine-900/5"
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
          <h3 className="font-serif text-lg font-semibold text-wine-900 transition-colors group-hover:text-wine-600">
            {recipe.title}
          </h3>
          <p className="font-serif text-sm italic text-gold-700">
            {recipe.frenchTitle}
          </p>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-stone-600">
          {recipe.description}
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs text-wine-700">
          <WineGlassIcon className="h-3.5 w-3.5 shrink-0 text-gold-600" />
          <span className="truncate italic">{recipe.winePairing.name}</span>
        </div>
        <div className="mt-auto flex items-center gap-4 pt-1 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5" />
            {recipe.prepMinutes + recipe.cookMinutes} min
            <span className="sr-only">total time</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ServingsIcon className="h-3.5 w-3.5" />
            {recipe.servings}
            <span className="sr-only">servings</span>
          </span>
          <span className="ml-auto text-wine-400">
            <span className="sr-only">Difficulty: </span>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  )
}
