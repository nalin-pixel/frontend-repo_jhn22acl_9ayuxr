import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartyList from './components/PartyList'

function App() {
  const [justCreated, setJustCreated] = useState(false)
  const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const createQuickParty = async () => {
    try {
      const res = await fetch(`${API}/api/parties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'New Party', theme: 'Chill vibes' })
      })
      if (!res.ok) throw new Error('Failed to create party')
      setJustCreated(true)
      setTimeout(() => setJustCreated(false), 2500)
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={() => {}} />
      <Hero onCreate={createQuickParty} />
      {justCreated && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
            Party created! Scroll down to see it in your list.
          </div>
        </div>
      )}
      <PartyList />
    </div>
  )
}

export default App
