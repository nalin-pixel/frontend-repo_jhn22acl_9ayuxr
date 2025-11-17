import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function PartyList() {
  const [parties, setParties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/parties`)
        if (!res.ok) throw new Error('Failed to load parties')
        const data = await res.json()
        setParties(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="py-10 text-center text-gray-500">Loading parties...</div>
  if (error) return <div className="py-10 text-center text-red-600">{error}</div>

  return (
    <section id="explore" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold mb-4">Your parties</h2>
      {parties.length === 0 ? (
        <p className="text-gray-600">No parties yet. Create your first one!</p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parties.map((p) => (
            <li key={p.id} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.date || 'Date tbd'}</p>
                </div>
                {p.theme && <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md">{p.theme}</span>}
              </div>
              {p.location && <p className="mt-2 text-gray-600">{p.location}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
