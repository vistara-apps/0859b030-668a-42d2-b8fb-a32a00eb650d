'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Input } from './ui'
import { TrendingUp, TrendingDown, DollarSign, Percent, Clock, Shield } from 'lucide-react'
import { formatCurrency, formatPercentage } from '../lib/utils'

interface Pool {
  id: string
  name: string
  protocol: string
  apy: number
  tvl: number
  risk: 'Low' | 'Medium' | 'High'
  tokens: string[]
  description: string
}

const mockPools: Pool[] = [
  {
    id: '1',
    name: 'USDC-ETH LP',
    protocol: 'Uniswap V3',
    apy: 12.5,
    tvl: 2400000,
    risk: 'Low',
    tokens: ['USDC', 'ETH'],
    description: 'Stable liquidity pair with consistent returns'
  },
  {
    id: '2',
    name: 'BASE-ETH LP',
    protocol: 'BaseSwap',
    apy: 18.7,
    tvl: 850000,
    risk: 'Medium',
    tokens: ['BASE', 'ETH'],
    description: 'High yield farming opportunity on Base network'
  },
  {
    id: '3',
    name: 'USDC Lending',
    protocol: 'Compound',
    apy: 8.2,
    tvl: 5200000,
    risk: 'Low',
    tokens: ['USDC'],
    description: 'Conservative lending with guaranteed returns'
  },
  {
    id: '4',
    name: 'cbETH Staking',
    protocol: 'Coinbase',
    apy: 15.3,
    tvl: 1800000,
    risk: 'Medium',
    tokens: ['cbETH'],
    description: 'Ethereum staking rewards through Coinbase'
  }
]

export function YieldDashboard() {
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null)
  const [depositAmount, setDepositAmount] = useState('')
  const [sortBy, setSortBy] = useState<'apy' | 'tvl' | 'risk'>('apy')

  const sortedPools = [...mockPools].sort((a, b) => {
    switch (sortBy) {
      case 'apy':
        return b.apy - a.apy
      case 'tvl':
        return b.tvl - a.tvl
      case 'risk':
        const riskOrder = { 'Low': 0, 'Medium': 1, 'High': 2 }
        return riskOrder[a.risk] - riskOrder[b.risk]
      default:
        return 0
    }
  })

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'High': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low': return <Shield className="w-4 h-4" />
      case 'Medium': return <Clock className="w-4 h-4" />
      case 'High': return <TrendingUp className="w-4 h-4" />
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,847.32</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,247.89</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12.3% this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg APY</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2%</div>
            <p className="text-xs text-muted-foreground">
              Across 3 active positions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Pools</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 Low risk, 1 Medium risk
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pool Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Available Pools</CardTitle>
                <CardDescription>
                  Discover and invest in the best yield opportunities
                </CardDescription>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md border border-border text-sm"
              >
                <option value="apy">Sort by APY</option>
                <option value="tvl">Sort by TVL</option>
                <option value="risk">Sort by Risk</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {sortedPools.map((pool) => (
              <div
                key={pool.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  selectedPool?.id === pool.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedPool(pool)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{pool.name}</h4>
                    <span className="text-xs bg-muted px-2 py-1 rounded">
                      {pool.protocol}
                    </span>
                  </div>
                  <div className={`flex items-center space-x-1 ${getRiskColor(pool.risk)}`}>
                    {getRiskIcon(pool.risk)}
                    <span className="text-sm">{pool.risk}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">APY: </span>
                    <span className="font-medium text-green-500">
                      {formatPercentage(pool.apy)}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">TVL: </span>
                    <span className="font-medium">
                      {formatCurrency(pool.tvl)}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-2">
                  {pool.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Deposit Interface */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedPool ? `Deposit to ${selectedPool.name}` : 'Select a Pool'}
            </CardTitle>
            <CardDescription>
              {selectedPool
                ? `Start earning ${formatPercentage(selectedPool.apy)} APY`
                : 'Choose a pool to start earning yield'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedPool ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Deposit Amount</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Balance: $5,432.10</span>
                    <button className="text-primary hover:underline">Max</button>
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>Expected APY</span>
                    <span className="font-medium text-green-500">
                      {formatPercentage(selectedPool.apy)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Est. Monthly Earnings</span>
                    <span className="font-medium">
                      {depositAmount
                        ? formatCurrency((parseFloat(depositAmount) * selectedPool.apy) / 100 / 12)
                        : '$0.00'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk Level</span>
                    <span className={`font-medium ${getRiskColor(selectedPool.risk)}`}>
                      {selectedPool.risk}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" disabled={!depositAmount}>
                    Deposit {depositAmount ? formatCurrency(parseFloat(depositAmount)) : ''}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By depositing, you agree to the protocol's terms and conditions
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select a pool from the list to start earning yield
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}