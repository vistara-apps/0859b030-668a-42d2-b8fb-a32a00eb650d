'use client';

import { useState } from 'react';
import { RefreshCw, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { RiskBadge } from './RiskBadge';

export function Rebalance() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const suggestions = [
    {
      id: 1,
      type: 'Move Supply',
      from: { protocol: 'Aave v3', asset: 'USDC', apy: 4.25 },
      to: { protocol: 'Moonwell', asset: 'USDC', apy: 4.8 },
      amount: 10000,
      netGain: 55,
      gasEstimate: 3.5,
      healthFactorChange: { before: 2.15, after: 2.18 },
      risk: 'low' as const,
    },
    {
      id: 2,
      type: 'Compound LP',
      from: { protocol: 'Aerodrome', asset: 'USDC-ETH', apy: 12.5 },
      to: { protocol: 'Aerodrome', asset: 'USDC-ETH', apy: 12.5 },
      amount: 5000,
      netGain: 125,
      gasEstimate: 8.2,
      healthFactorChange: { before: 2.15, after: 2.15 },
      risk: 'medium' as const,
    },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Smart Rebalance</h1>
        <p className="text-subtext">Gas-aware suggestions to optimize your yield</p>
      </div>

      {/* Current Position Summary */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold mb-4">Current Position</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-subtext mb-1">Total Value</p>
            <p className="text-2xl font-bold text-accent">$125,430</p>
          </div>
          <div>
            <p className="text-sm text-subtext mb-1">Weighted APY</p>
            <p className="text-2xl font-bold text-positive">8.45%</p>
          </div>
          <div>
            <p className="text-sm text-subtext mb-1">Health Factor</p>
            <p className="text-2xl font-bold text-fg">2.15</p>
          </div>
        </div>
      </div>

      {/* Analyze Button */}
      <div className="flex justify-center">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="btn-primary flex items-center space-x-2"
        >
          <RefreshCw className={`w-5 h-5 ${isAnalyzing ? 'animate-spin' : ''}`} />
          <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Opportunities'}</span>
        </button>
      </div>

      {/* Suggestions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recommended Actions</h2>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="glass-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold">{suggestion.type}</h3>
                    <RiskBadge risk={suggestion.risk} />
                  </div>
                  <p className="text-sm text-subtext">
                    {suggestion.from.protocol} → {suggestion.to.protocol}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-subtext">Net Gain</p>
                  <p className="text-xl font-bold text-positive">+${suggestion.netGain}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-xs text-subtext mb-1">From</p>
                  <p className="font-medium">{suggestion.from.asset}</p>
                  <p className="text-sm text-subtext">{suggestion.from.apy}% APY</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-xs text-subtext mb-1">To</p>
                  <p className="font-medium">{suggestion.to.asset}</p>
                  <p className="text-sm text-positive">{suggestion.to.apy}% APY</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="text-subtext">Amount: </span>
                    <span className="font-medium">${suggestion.amount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-subtext">Gas: </span>
                    <span className="font-medium">${suggestion.gasEstimate}</span>
                  </div>
                </div>
                <div>
                  <span className="text-subtext">HF: </span>
                  <span className="font-medium">
                    {suggestion.healthFactorChange.before} → {suggestion.healthFactorChange.after}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="btn-primary flex-1">Execute</button>
                <button className="btn-secondary">Simulate</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="glass-card p-6 border-l-4 border-accent">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold mb-1">About Rebalancing</h3>
            <p className="text-sm text-subtext">
              Our algorithm analyzes gas costs, slippage, and health factor changes to ensure
              every suggested move is profitable after fees. All transactions are simulated
              before execution to prevent failures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
