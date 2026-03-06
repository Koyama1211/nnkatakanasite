import { useMemo, useState } from 'react'

type Card = {
  kana: string
  romaji: string
}

const baseDeck: Card[] = [
  { kana: 'ア', romaji: 'a' },
  { kana: 'イ', romaji: 'i' },
  { kana: 'ウ', romaji: 'u' },
  { kana: 'エ', romaji: 'e' },
  { kana: 'オ', romaji: 'o' },
  { kana: 'カ', romaji: 'ka' },
  { kana: 'キ', romaji: 'ki' },
  { kana: 'ク', romaji: 'ku' },
  { kana: 'ケ', romaji: 'ke' },
  { kana: 'コ', romaji: 'ko' },
  { kana: 'サ', romaji: 'sa' },
  { kana: 'シ', romaji: 'shi' },
  { kana: 'ス', romaji: 'su' },
  { kana: 'セ', romaji: 'se' },
  { kana: 'ソ', romaji: 'so' },
]

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

function createOptions(correct: string, cards: Card[]): string[] {
  const wrongPool = cards
    .map((card) => card.romaji)
    .filter((romaji) => romaji !== correct)

  const distractors = shuffle(wrongPool).slice(0, 3)
  return shuffle([correct, ...distractors])
}

function App() {
  const [queue, setQueue] = useState<Card[]>(() => shuffle(baseDeck))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [againCount, setAgainCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const current = queue[index]

  const options = useMemo(() => {
    if (!current) {
      return []
    }

    return createOptions(current.romaji, baseDeck)
  }, [current])

  const progress = Math.round((answeredCount / queue.length) * 100)

  const handleChoice = (choice: string) => {
    if (!current || isAnswered) {
      return
    }

    setSelected(choice)
    setIsAnswered(true)
    setAnsweredCount((count) => count + 1)

    if (choice === current.romaji) {
      setCorrectCount((count) => count + 1)
    }
  }

  const moveNext = () => {
    const hasNext = index + 1 < queue.length

    if (hasNext) {
      setIndex((value) => value + 1)
      setIsAnswered(false)
      setSelected(null)
      return
    }

    setIsComplete(true)
  }

  const handleAgain = () => {
    if (!current || !isAnswered) {
      return
    }

    setQueue((cards) => [...cards, current])
    setAgainCount((count) => count + 1)
    moveNext()
  }

  const restart = () => {
    setQueue(shuffle(baseDeck))
    setIndex(0)
    setSelected(null)
    setIsAnswered(false)
    setAnsweredCount(0)
    setCorrectCount(0)
    setAgainCount(0)
    setIsComplete(false)
  }

  if (isComplete) {
    const score =
      answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100)

    return (
      <div className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-6">
        <div className="floating-dot dot-a" />
        <div className="floating-dot dot-b" />
        <div className="floating-dot dot-c" />

        <main className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          <section className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 text-center shadow-[var(--shadow-soft)] sm:p-7">
            <p className="text-sm font-bold tracking-[0.12em] text-[var(--ink-soft)] uppercase">
              session complete
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
              nana专用片假名练习帐
            </h1>
            <p className="mt-3 text-base text-[var(--ink-soft)]">
              おつかれさま。今日はここまでで十分です。
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[var(--line)] bg-white/90 px-3 py-3">
                <p className="text-xs text-[var(--ink-soft)]">正解率</p>
                <p className="text-xl font-extrabold text-[var(--ink)]">
                  {score}%
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/90 px-3 py-3">
                <p className="text-xs text-[var(--ink-soft)]">回答数</p>
                <p className="text-xl font-extrabold text-[var(--ink)]">
                  {answeredCount}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white/90 px-3 py-3">
                <p className="text-xs text-[var(--ink-soft)]">もう一回</p>
                <p className="text-xl font-extrabold text-[var(--ink)]">
                  {againCount}
                </p>
              </div>
            </div>

            <button
              className="mt-6 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
              onClick={restart}
              type="button"
            >
              もう1セット
            </button>
          </section>
        </main>
      </div>
    )
  }

  if (!current) {
    return null
  }

  const isCorrect = selected === current.romaji

  return (
    <div className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-6">
      <div className="floating-dot dot-a" />
      <div className="floating-dot dot-b" />
      <div className="floating-dot dot-c" />

      <main className="mx-auto flex w-full max-w-2xl flex-col gap-4 sm:gap-5">
        <header className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.15em] text-[var(--ink-soft)] uppercase">
            nana only
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            nana专用片假名练习帐
          </h1>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            フラッシュカード形式: 文字を見て、正しいローマ字を4択で選ぶ。
          </p>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[var(--accent)] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-[var(--ink-soft)]">
            {answeredCount}/{queue.length} 回答済み
          </p>
        </header>

        <section className="fade-up delay-1 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <p className="text-sm font-semibold text-[var(--ink-soft)]">
            Q{index + 1}
          </p>
          <div className="mt-2 flex items-center justify-center rounded-3xl bg-white/85 py-8 shadow-sm">
            <span className="text-7xl font-black text-[var(--ink)] sm:text-8xl">
              {current.kana}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {options.map((choice) => {
              const isThisCorrect = isAnswered && choice === current.romaji
              const isThisWrong =
                isAnswered && selected === choice && choice !== current.romaji

              return (
                <button
                  key={choice}
                  className={`rounded-2xl border px-3 py-3 text-sm font-bold transition sm:text-base ${
                    isThisCorrect
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                      : isThisWrong
                        ? 'border-rose-300 bg-rose-50 text-rose-700'
                        : 'border-[var(--line)] bg-white text-[var(--ink)] hover:bg-[var(--sky-soft)]'
                  }`}
                  onClick={() => handleChoice(choice)}
                  type="button"
                >
                  {choice}
                </button>
              )
            })}
          </div>

          <div className="mt-4 min-h-7 text-sm font-semibold">
            {isAnswered ? (
              <p className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                {isCorrect
                  ? `正解! ${current.kana} = ${current.romaji}`
                  : `不正解。${current.kana} の正解は ${current.romaji}`}
              </p>
            ) : (
              <p className="text-[var(--ink-soft)]">迷ったら直感で選んでOK。</p>
            )}
          </div>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <button
              className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:bg-[var(--sky-soft)] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!isAnswered}
              onClick={handleAgain}
              type="button"
            >
              もう一回
            </button>
            <button
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!isAnswered}
              onClick={moveNext}
              type="button"
            >
              次へ
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
