const todayKana = ['シ', 'ツ', 'ソ', 'ン', 'ノ', 'メ', 'ヌ', 'マ', 'ホ', 'モ']

const miniMenu = [
  {
    label: '似ている文字を3組だけ見る',
    note: 'シ/ツ, ソ/ン, ノ/メ',
  },
  {
    label: '声に出して10文字読む',
    note: 'ゆっくりでOK',
  },
  {
    label: '1分ミニクイズを1回',
    note: 'できたら終了',
  },
]

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-6">
      <div className="floating-dot dot-a" />
      <div className="floating-dot dot-b" />
      <div className="floating-dot dot-c" />

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 sm:gap-5">
        <header className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.15em] text-[var(--ink-soft)] uppercase">
            nana only
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            nana专用片假名练习帐
          </h1>
          <p className="mt-2 text-base text-[var(--ink-soft)]">
            めんどくさい日でも「3分だけ」で続く、かわいい片仮名ノート。
          </p>
        </header>

        <section className="fade-up delay-1 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <h2 className="text-lg font-bold text-[var(--ink)]">
            今日の3分メニュー
          </h2>
          <ul className="mt-3 space-y-2.5">
            {miniMenu.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-2xl bg-white/80 px-3 py-2.5"
              >
                <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[var(--ink-soft)]">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-95">
              はじめる
            </button>
            <button className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:bg-[var(--sky-soft)]">
              今日は1セットだけ
            </button>
          </div>
        </section>

        <section className="fade-up delay-2 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <h2 className="text-lg font-bold text-[var(--ink)]">今日の10文字</h2>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            似た形から順番に。迷ったら飛ばしてOK。
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {todayKana.map((kana) => (
              <span
                key={kana}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-lg font-bold text-[var(--ink)] shadow-sm"
              >
                {kana}
              </span>
            ))}
          </div>
        </section>

        <section className="fade-up delay-3 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-[var(--line)] bg-white/90 px-4 py-3 text-center shadow-sm">
            <p className="text-xs font-bold tracking-[0.12em] text-[var(--ink-soft)] uppercase">
              streak
            </p>
            <p className="mt-1 text-xl font-extrabold text-[var(--ink)]">
              4 days
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-white/90 px-4 py-3 text-center shadow-sm">
            <p className="text-xs font-bold tracking-[0.12em] text-[var(--ink-soft)] uppercase">
              best score
            </p>
            <p className="mt-1 text-xl font-extrabold text-[var(--ink)]">82%</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
