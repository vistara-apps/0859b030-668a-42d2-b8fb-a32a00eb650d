'use client';

import { TrendingUp, DollarSign } from 'lucide-react';
import { RiskBadge } from './RiskBadge';

interface MarketCardProps {
  protocol: string;
  asset: string;
  type: 'supply' | 'borrow' | 'lp';
  apy: number;
  tvl: number;
  risk: 'low' | 'medium' | 'high';
}

export function MarketCard({ protocol, asset, type, apy, tvl, risk }: MarketCardProps) {
  const typeColors = {
    supply: 'text-positive',
    borrow: 'text-warning',
    lp: 'text-accent',
  };

  const typeLabels = {
    supply: 'Supply',
    borrow: 'Borrow',
    lp: 'LP',
  };

  return (
    <div className="glass-card p-5 hover:border-accent transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg mb-1">{asset}</h3>
          <p className="text-sm text-subtext">{protocol}</p>
        </div>
        <RiskBadge risk={risk} />
      </div>

      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-subtext mb-1">APY</p>
          <p className="text-2xl font-bold text-accent">{apy}%</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-subtext mb-1">Type</p>
          <p className={`text-sm font-medium ${typeColors[type]}`}>
            {typeLabels[type]}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-1 text-subtext">
          <DollarSign className="w-4 h-4" />
          <span>TVL: ${(tvl / 1000000).toFixed(1)}M</span>
        </div>
        <button className="text-accent hover:text-yellow-400 font-medium">
          Details →
        </button>
      </div>
    </div>
  );
}
