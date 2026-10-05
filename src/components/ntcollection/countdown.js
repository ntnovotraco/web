import { useEffect, useState } from 'react'

// Data-alvo do countdown. Troque aqui pra ajustar em TODOS os lugares
// (banner, card de pricing etc). Timezone de Brasília (-03:00).
export const COUNTDOWN_END = '2026-04-27T23:59:59-03:00'

export const pad = (n) => String(n).padStart(2, '0')

export function getRemaining() {
  const diff = new Date(COUNTDOWN_END).getTime() - Date.now()
  if (!Number.isFinite(diff) || diff <= 0) return null
  const totalSeconds = Math.floor(diff / 1000)
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function useCountdown() {
  const [time, setTime] = useState(() => getRemaining())
  useEffect(() => {
    if (!time) return
    const id = setInterval(() => {
      const t = getRemaining()
      if (!t) { clearInterval(id); setTime(null); return }
      setTime(t)
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}
