'use client';

import { TrendingUp, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import { MarketCard } from './MarketCard';
import { RiskBadge } from './RiskBadge';

export function Dashboard() {
  const stats = [
    { label: 'Total Value', value: '$125,430', change: '+5.2%', positive: true },
    { label: 'Net APY', value: '8.45%', change: '+0.3%', positive: true },
    { label: 'Health Factor', value: '2.15', change: 'Safe', positive: true },
    { label: 'Gas Saved', value: '$234', change: 'This month', positive: true },
  ];

  const topMarkets = [
    {
      protocol: 'Aave v3',
      asset: 'USDC',
      type: 'supply' as const,
      apy: 4.25,
      tvl: 125000000,
      risk: 'low' as const,
    },
    {
      protocol: 'Moonwell',
      asset: 'ETH',
      type: 'supply' as const,
      apy: 3.85,
      tvl: 89000000,
      risk: 'low' as const,
    },
    {
      protocol: 'Aerodrome',
      asset: 'USDC-ETH',
      type: 'lp' as const,
      apy: 12.5,
      tvl: 45000000,
      risk: 'medium' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="metric-card">
            <div className="flex items-center justify-between mb-2">
              <span className="stat-label">{stat.label}</span>
              {stat.positive ? (
                <TrendingUp className="w-4 h-4 text-positive" />
              ) : (
                <TrendingDown className="w-4 h-4 text-danger" />
              )}
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className={`text-sm mt-1 ${stat.positive ? 'text-positive' : 'text-danger'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Alerts Section */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <h2 className="text-xl font-semibold">Active Alerts</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Moonwell USDC APY increased</p>
              <p className="text-sm text-subtext">From 3.2% to 4.8% - Consider rebalancing</p>
            </div>
            <button className="btn-ghost text-accent">Review</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Aerodrome LP rewards available</p>
              <p className="text-sm text-subtext">$45.30 in AERO ready to claim</p>
            </div>
            <button className="btn-ghost text-accent">Claim</button>
          </div>
        </div>
      </div>

      {/* Top Markets */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Top Opportunities</h2>
          <button className="text-accent hover:text-yellow-400 text-sm font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topMarkets.map((market, index) => (
            <MarketCard key={index} {...market} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary">
            <DollarSign className="w-5 h-5 inline mr-2" />
            Rebalance Now
          </button>
          <button className="btn-secondary">
            Check Health Factor
          </button>
          <button className="btn-secondary">
            Compound Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
