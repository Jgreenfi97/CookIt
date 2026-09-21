import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🥖</span>
          <div>
            <h1 className="font-serif text-xl font-bold tracking-tight text-stone-900">
              CookIt
            </h1>
            <p className="text-xs text-stone-500">
              French cooking's greatest recipes
            </p>
          </div>
        </Link>
      </div>
    </header>
  )
}
