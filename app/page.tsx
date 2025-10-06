'use client'

import { useState } from 'react'
import { useTheme } from './components/ThemeProvider'
import { YieldDashboard } from './components/YieldDashboard'
import { ChevronDown, TrendingUp, Shield, Zap, ArrowRight, Github, Twitter, BarChart3 } from 'lucide-react'

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<'home' | 'dashboard'>('home')

  const themes = [
    { value: 'default', label: 'Default', color: 'bg-gray-500' },
    { value: 'base', label: 'Base', color: 'bg-blue-500' },
    { value: 'celo', label: 'Celo', color: 'bg-yellow-500' },
    { value: 'solana', label: 'Solana', color: 'bg-purple-500' },
    { value: 'coinbase', label: 'Coinbase', color: 'bg-blue-600' },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: 'Optimized Yields',
      description: 'Maximize your returns with our advanced yield optimization algorithms'
    },
    {
      icon: Shield,
      title: 'Secure & Audited',
      description: 'Built with security-first approach and thoroughly audited smart contracts'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant transactions and real-time yield updates'
    }
  ]

  const stats = [
    { label: 'Total Value Locked', value: '$2.4M', change: '+12.3%' },
    { label: 'Active Users', value: '1,247', change: '+8.7%' },
    { label: 'Average APY', value: '18.5%', change: '+2.1%' },
    { label: 'Protocols', value: '12', change: '+3' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Base Yield Pilot</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors ${
                  activeTab === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center space-x-1 transition-colors ${
                  activeTab === 'dashboard' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
            </nav>

            {/* Theme Selector */}
            <div className="relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="appearance-none bg-secondary text-secondary-foreground px-4 py-2 pr-8 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {themes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {activeTab === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Maximize Your{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    DeFi Yields
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Base Yield Pilot is your gateway to optimized yield farming on Base network. 
                  Discover the best opportunities, minimize risks, and maximize returns with our 
                  cutting-edge platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="btn-primary group"
                  >
                    Launch App
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-secondary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-green-500">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Base Yield Pilot?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the modern DeFi user, our platform combines simplicity with powerful features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Earning?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who are already maximizing their yields with Base Yield Pilot
            </p>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Base Yield Pilot</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Base Yield Pilot. Built with ❤️ for the DeFi community.</p>
          </div>
        </div>
      </footer>
        </>
      ) : (
        <div className="py-8 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Yield Dashboard</h2>
              <p className="text-muted-foreground">
                Manage your DeFi investments and track your yields in real-time
              </p>
            </div>
            <YieldDashboard />
          </div>
        </div>
      )}
    </div>
  )
}