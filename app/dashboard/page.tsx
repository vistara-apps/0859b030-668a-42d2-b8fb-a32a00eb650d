'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { ThemeSwitcher } from '../components/theme-switcher'
import { Navigation } from '../components/navigation'
import { 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  PieChart,
  BarChart3,
  Wallet,
  Settings
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h1 className="text-lg sm:text-2xl font-bold text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Navigation />
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              0x1234...5678
            </Button>
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Portfolio Overview */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Portfolio Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +20.1% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Yield Earned</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,350.40</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +180.1% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600 flex items-center">
                    +3 new positions
                  </span>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg APY</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +2.1% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Positions */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Active Positions</h2>
            <Button>
              <PieChart className="h-4 w-4 mr-2" />
              Add Position
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { 
                name: 'ETH-USDC Pool', 
                apy: '15.2%', 
                balance: '$12,450.00', 
                earned: '$1,245.50',
                risk: 'Low',
                change: '+5.2%',
                positive: true
              },
              { 
                name: 'BTC-ETH Pool', 
                apy: '12.8%', 
                balance: '$8,750.00', 
                earned: '$567.80',
                risk: 'Medium',
                change: '+3.1%',
                positive: true
              },
              { 
                name: 'USDC Lending', 
                apy: '8.5%', 
                balance: '$15,200.00', 
                earned: '$425.60',
                risk: 'Low',
                change: '-1.2%',
                positive: false
              },
              { 
                name: 'DeFi Index Fund', 
                apy: '18.7%', 
                balance: '$8,831.89', 
                earned: '$111.49',
                risk: 'High',
                change: '+12.5%',
                positive: true
              },
            ].map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{position.name}</CardTitle>
                      <CardDescription>Balance: {position.balance}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{position.apy}</div>
                      <div className={`text-sm px-2 py-1 rounded-full ${
                        position.risk === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        position.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {position.risk} Risk
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Earned</p>
                      <p className="text-lg font-semibold text-green-600">{position.earned}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">24h Change</p>
                      <p className={`text-lg font-semibold flex items-center ${
                        position.positive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {position.positive ? 
                          <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        }
                        {position.change}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">Withdraw</Button>
                    <Button className="flex-1">Add More</Button>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  Deposit Funds
                </CardTitle>
                <CardDescription>
                  Add more funds to your existing positions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-accent" />
                  Explore Pools
                </CardTitle>
                <CardDescription>
                  Discover new yield opportunities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-secondary" />
                  Analytics
                </CardTitle>
                <CardDescription>
                  View detailed performance metrics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Mobile Theme Switcher */}
        <div className="sm:hidden flex justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}