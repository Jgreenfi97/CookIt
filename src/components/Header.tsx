import { Link } from 'react-router-dom'
import { CandleIcon } from './icons'

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gold-300/60 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <Link to="/" className="flex items-center gap-3">
          <CandleIcon className="h-7 w-7 text-gold-600" />
          <div>
            <p className="font-serif text-2xl font-bold tracking-tight text-wine-800">
              CookIt
            </p>
            <p className="font-serif text-xs italic tracking-wide text-gold-700">
              France's greatest recipes, for candlelit evenings
            </p>
          </div>
        </Link>
      </div>
    </header>
  )
}
