'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ThemeSwitcher } from './components/theme-switcher'
import { Navigation } from './components/navigation'
import { TrendingUp, DollarSign, Percent, Activity, Wallet, Shield } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h1 className="text-lg sm:text-2xl font-bold text-foreground">Base Yield Pilot</h1>
          </div>
          <div className="flex items-center gap-4">
            <Navigation />
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Maximize Your DeFi Yields
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover and optimize yield opportunities across multiple blockchain networks with our advanced pilot program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          <div className="mt-8 sm:hidden">
            <ThemeSwitcher />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl">$2.4M+</CardTitle>
                <CardDescription>Total Value Locked</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Percent className="h-12 w-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-3xl">12.5%</CardTitle>
                <CardDescription>Average APY</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Activity className="h-12 w-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-3xl">1,250+</CardTitle>
                <CardDescription>Active Users</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Yield Dashboard */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Yield Opportunities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Yield Pool Cards */}
            {[
              { name: 'ETH-USDC Pool', apy: '15.2%', tvl: '$850K', risk: 'Low' },
              { name: 'BTC-ETH Pool', apy: '12.8%', tvl: '$1.2M', risk: 'Medium' },
              { name: 'USDC Lending', apy: '8.5%', tvl: '$350K', risk: 'Low' },
              { name: 'DeFi Index Fund', apy: '18.7%', tvl: '$420K', risk: 'High' },
            ].map((pool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">{pool.name}</CardTitle>
                      <CardDescription>TVL: {pool.tvl}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-primary">{pool.apy}</div>
                      <div className={`text-xs sm:text-sm px-2 py-1 rounded-full ${
                        pool.risk === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        pool.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {pool.risk} Risk
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1">Deposit</Button>
                    <Button variant="outline" className="flex-1">Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Base Yield Pilot?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure & Audited</CardTitle>
                <CardDescription>
                  All smart contracts are thoroughly audited by leading security firms
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Wallet className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Multi-Chain Support</CardTitle>
                <CardDescription>
                  Access yield opportunities across Ethereum, Base, Solana, and more
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Optimized Returns</CardTitle>
                <CardDescription>
                  AI-powered strategies to maximize your yield while minimizing risk
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Start Earning?</CardTitle>
              <CardDescription className="text-lg">
                Join thousands of users already maximizing their DeFi yields
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Enter your wallet address" className="flex-1" />
                <Button className="w-full sm:w-auto">Connect Wallet</Button>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Base Yield Pilot. Built with ❤️ for the DeFi community.</p>
        </div>
      </footer>
    </div>
  )
}