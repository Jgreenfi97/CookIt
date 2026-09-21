import { useNavigate } from 'react-router-dom'
import { recipes } from '../data/recipes'
import { SparkleIcon } from './icons'

const variants = {
  onDark:
    'border-gold-400/60 bg-gold-400/10 text-gold-300 hover:border-gold-300 hover:bg-gold-400/20 hover:text-gold-200',
  onLight:
    'border-gold-300 bg-white text-wine-700 hover:border-gold-400 hover:bg-gold-100/60',
}

export function SurpriseButton({
  label = 'Surprise me tonight',
  variant = 'onDark',
  excludeSlug,
}: {
  label?: string
  variant?: keyof typeof variants
  excludeSlug?: string
}) {
  const navigate = useNavigate()

  const pickRandom = () => {
    const pool = recipes.filter((r) => r.slug !== excludeSlug)
    const choice = pool[Math.floor(Math.random() * pool.length)]
    navigate(`/recipes/${choice.slug}`)
  }

  return (
    <button
      type="button"
      onClick={pickRandom}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${variants[variant]}`}
    >
      <SparkleIcon className="h-4 w-4" />
      {label}
    </button>
  )
}
