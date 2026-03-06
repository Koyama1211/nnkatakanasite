function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-6 py-16">
      <section className="space-y-4">
        <p className="inline-flex rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-orange-700 shadow-sm ring-1 ring-orange-200">
          Katakana Coach
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Learn katakana with a personal, focused study flow.
        </h1>
        <p className="max-w-2xl text-lg text-gray-700">
          The environment is ready. Next, we can build lessons tuned for a
          Chinese native speaker: similar-shape kana drills, pronunciation
          audio, and adaptive review.
        </p>
      </section>
      <section className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-orange-100">
          <p className="text-sm font-semibold text-orange-700">Stack</p>
          <p className="mt-2 text-sm text-gray-700">
            React + TypeScript + Vite
          </p>
        </div>
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-orange-100">
          <p className="text-sm font-semibold text-orange-700">Quality</p>
          <p className="mt-2 text-sm text-gray-700">
            ESLint + Prettier + Vitest
          </p>
        </div>
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-orange-100">
          <p className="text-sm font-semibold text-orange-700">UI</p>
          <p className="mt-2 text-sm text-gray-700">Tailwind CSS v4</p>
        </div>
      </section>
    </main>
  )
}

export default App
