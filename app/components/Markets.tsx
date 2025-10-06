'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { MarketCard } from './MarketCard';

export function Markets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'supply' | 'borrow' | 'lp'>('all');

  const markets = [
    { protocol: 'Aave v3', asset: 'USDC', type: 'supply' as const, apy: 4.25, tvl: 125000000, risk: 'low' as const },
    { protocol: 'Aave v3', asset: 'ETH', type: 'supply' as const, apy: 3.15, tvl: 98000000, risk: 'low' as const },
    { protocol: 'Moonwell', asset: 'USDC', type: 'supply' as const, apy: 4.8, tvl: 67000000, risk: 'low' as const },
    { protocol: 'Moonwell', asset: 'ETH', type: 'supply' as const, apy: 3.85, tvl: 89000000, risk: 'low' as const },
    { protocol: 'Seamless', asset: 'USDC', type: 'supply' as const, apy: 3.95, tvl: 45000000, risk: 'medium' as const },
    { protocol: 'Aerodrome', asset: 'USDC-ETH', type: 'lp' as const, apy: 12.5, tvl: 45000000, risk: 'medium' as const },
    { protocol: 'Aerodrome', asset: 'USDC-AERO', type: 'lp' as const, apy: 18.3, tvl: 23000000, risk: 'high' as const },
    { protocol: 'Aave v3', asset: 'USDC', type: 'borrow' as const, apy: 5.2, tvl: 125000000, risk: 'low' as const },
  ];

  const filteredMarkets = markets.filter(market => {
    const matchesSearch = market.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         market.protocol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || market.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Markets</h1>
        <p className="text-subtext">Real-time yield and risk data across Base protocols</p>
      </div>

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-subtext" />
            <input
              type="text"
              placeholder="Search markets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-gray-700 rounded-lg text-fg placeholder-subtext focus:outline-none focus:border-accent"
            />
          </div>
          <div className="flex space-x-2">
            {(['all', 'supply', 'borrow', 'lp'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filterType === type
                    ? 'bg-accent text-gray-900'
                    : 'bg-muted text-subtext hover:text-fg'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Markets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMarkets.map((market, index) => (
          <MarketCard key={index} {...market} />
        ))}
      </div>

      {filteredMarkets.length === 0 && (
        <div className="glass-card p-12 text-center">
          <Filter className="w-12 h-12 text-subtext mx-auto mb-4" />
          <p className="text-subtext">No markets found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
