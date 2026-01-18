export function randomFromArray<T>(items: readonly T[], exclude?: T): T {
  if (items.length === 0) {
    throw new Error('randomFromArray: empty array')
  }

  if (items.length === 1) return items[0]

  let candidate = items[Math.floor(Math.random() * items.length)]
  if (exclude === undefined) return candidate

  for (let i = 0; i < 6; i += 1) {
    if (candidate !== exclude) return candidate
    candidate = items[Math.floor(Math.random() * items.length)]
  }

  const fallback = items.find((x) => x !== exclude)
  return fallback ?? items[0]
}

