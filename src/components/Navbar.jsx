import { useState } from 'react'
import { Menu, Search } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <a href="/" className="text-xl font-bold tracking-tight">Revelry+</a>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 w-1/2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search parties, dishes, or ingredients..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Search</button>
        </form>

        <div className="flex items-center gap-2">
          <a href="/test" className="text-sm text-gray-600 hover:text-gray-900">API Status</a>
          <a href="#" className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm">Sign in</a>
        </div>
      </div>
    </header>
  )
}
