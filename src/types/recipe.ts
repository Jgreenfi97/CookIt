export type Course = 'Starter' | 'Main' | 'Side' | 'Dessert' | 'Baking'

export interface WinePairing {
  name: string
  appellation: string
  note: string
}

export interface Recipe {
  slug: string
  title: string
  frenchTitle: string
  region: string
  course: Course
  description: string
  prepMinutes: number
  cookMinutes: number
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  ingredients: string[]
  steps: string[]
  winePairing: WinePairing
}
