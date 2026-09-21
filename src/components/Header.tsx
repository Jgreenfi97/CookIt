import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-gold-300/60 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl">🕯️</span>
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-wine-800">
              CookIt
            </h1>
            <p className="font-serif text-xs italic tracking-wide text-gold-700">
              France's greatest recipes, for candlelit evenings
            </p>
          </div>
        </Link>
      </div>
    </header>
  )
}
