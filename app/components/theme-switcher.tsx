'use client'

import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { Palette } from 'lucide-react'

const themes = [
  { name: 'default', label: 'Default', color: '#222' },
  { name: 'celo', label: 'CELO', color: '#FCFF52' },
  { name: 'solana', label: 'Solana', color: '#9945FF' },
  { name: 'base', label: 'Base', color: '#0052FF' },
  { name: 'coinbase', label: 'Coinbase', color: '#0052FF' },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4" />
      <div className="flex gap-1">
        {themes.map((t) => (
          <Button
            key={t.name}
            variant={theme === t.name ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme(t.name as any)}
            className="text-xs"
          >
            {t.label}
          </Button>
        ))}
      </div>
    </div>
  )
}