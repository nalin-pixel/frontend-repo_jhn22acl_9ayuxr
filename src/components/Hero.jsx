export default function Hero({ onCreate }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Plan unforgettable parties with AI-driven menus
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From guest lists to grocery lists — search recipes by ingredients, build menus, and track RSVPs. Faster planning, better vibes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={onCreate} className="px-5 py-3 bg-gray-900 text-white rounded-md hover:bg-black">
              Create a party
            </button>
            <a href="#explore" className="px-5 py-3 border rounded-md hover:bg-gray-50">
              Explore menus
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-200 to-pink-200" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-4">
            <p className="text-sm font-medium">Smart suggestions</p>
            <p className="text-xs text-gray-500">We recommend balanced menus matching your theme, dietary needs, and budget.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
