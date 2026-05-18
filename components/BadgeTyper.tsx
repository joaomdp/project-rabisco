'use client'

import { useEffect, useState } from 'react'

const BADGE_CHARS = [...'Agência criativa · feita no Brasil 🇧🇷']
const BADGE_SPEED = 42
const BADGE_START = 300

export default function BadgeTyper() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= BADGE_CHARS.length) return
    const delay = count === 0 ? BADGE_START : BADGE_SPEED
    const id = setTimeout(() => setCount(c => c + 1), delay)
    return () => clearTimeout(id)
  }, [count])

  return (
    <>
      {BADGE_CHARS.slice(0, count).join('')}
      {count < BADGE_CHARS.length && (
        <span className="animate-pulse opacity-50">_</span>
      )}
    </>
  )
}
