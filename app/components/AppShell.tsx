'use client';

import { ReactNode } from 'react';
import { LayoutDashboard, TrendingUp, RefreshCw, Settings2 } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';

type View = 'dashboard' | 'markets' | 'rebalance' | 'settings';

interface AppShellProps {
  children: ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export function AppShell({ children, currentView, onViewChange }: AppShellProps) {
  const navItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'markets' as View, label: 'Markets', icon: TrendingUp },
    { id: 'rebalance' as View, label: 'Rebalance', icon: RefreshCw },
    { id: 'settings' as View, label: 'Settings', icon: Settings2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg">
      {/* Header */}
      <header className="glass-card border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">₿</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-accent">Base Yield Pilot</h1>
                <p className="text-xs text-subtext">Smart Rebalancing</p>
              </div>
            </div>
            
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8" />
                  <Name className="text-sm font-medium" />
                </div>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="glass-card border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-accent text-gray-900'
                      : 'text-subtext hover:text-fg hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
