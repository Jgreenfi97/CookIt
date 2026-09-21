import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
