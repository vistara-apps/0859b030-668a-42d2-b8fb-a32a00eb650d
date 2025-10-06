import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Base Yield Pilot - Maximize Your DeFi Yields',
  description: 'Discover and optimize yield opportunities across multiple blockchain networks with our advanced pilot program.',
  keywords: 'DeFi, yield farming, Base, Ethereum, Solana, CELO, Coinbase, cryptocurrency',
  authors: [{ name: 'Base Yield Pilot Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="base" storageKey="base-yield-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}