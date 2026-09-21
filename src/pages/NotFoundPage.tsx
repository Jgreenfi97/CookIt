import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '../components/icons'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-serif text-2xl italic text-wine-800">
        This recipe has left the table.
      </p>
      <p className="mt-2 text-sm text-stone-500">
        We couldn't find what you were looking for.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-wine-700 px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-wine-600"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to all recipes
      </Link>
    </div>
  )
}
