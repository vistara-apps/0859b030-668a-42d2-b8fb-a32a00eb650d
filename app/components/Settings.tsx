'use client';

import { useState } from 'react';
import { Bell, Shield, Zap, DollarSign } from 'lucide-react';

export function Settings() {
  const [minHealthFactor, setMinHealthFactor] = useState(1.5);
  const [maxGasUSD, setMaxGasUSD] = useState(10);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-subtext">Configure your yield optimization preferences</p>
      </div>

      {/* Subscription Tier */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">Subscription</h2>
        </div>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Free Tier</span>
            <span className="text-accent text-sm">Active</span>
          </div>
          <p className="text-sm text-subtext mb-3">
            Read-only access + 3 alerts per month
          </p>
          <button className="btn-primary w-full">
            Upgrade to Pro - $19/mo
          </button>
        </div>
        <div className="text-xs text-subtext">
          Pro includes: Unlimited alerts, simulations, 1-click execution
        </div>
      </div>

      {/* Risk Settings */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">Risk Settings</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Minimum Health Factor
            </label>
            <input
              type="range"
              min="1.1"
              max="3.0"
              step="0.1"
              value={minHealthFactor}
              onChange={(e) => setMinHealthFactor(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-subtext mt-1">
              <span>1.1 (Risky)</span>
              <span className="text-accent font-medium">{minHealthFactor}</span>
              <span>3.0 (Safe)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Maximum Gas per Transaction (USD)
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={maxGasUSD}
              onChange={(e) => setMaxGasUSD(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-subtext mt-1">
              <span>$1</span>
              <span className="text-accent font-medium">${maxGasUSD}</span>
              <span>$50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bell className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Enable Alerts</p>
              <p className="text-sm text-subtext">Receive notifications for opportunities</p>
            </div>
            <button
              onClick={() => setAlertsEnabled(!alertsEnabled)}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                alertsEnabled ? 'bg-accent' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  alertsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">APY Delta Alerts</p>
              <p className="text-sm text-subtext">Notify when rates change by 0.5%+</p>
            </div>
            <button className="w-12 h-6 rounded-full bg-accent">
              <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Health Factor Warnings</p>
              <p className="text-sm text-subtext">Alert when HF drops below threshold</p>
            </div>
            <button className="w-12 h-6 rounded-full bg-accent">
              <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">Weekly Rebalance Check</p>
              <p className="text-sm text-subtext">Monday 9am UTC ritual reminder</p>
            </div>
            <button className="w-12 h-6 rounded-full bg-accent">
              <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Preferences */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-semibold">Protocol Preferences</h2>
        </div>
        <div className="space-y-2">
          {['Aave v3', 'Moonwell', 'Seamless', 'Aerodrome'].map((protocol) => (
            <div key={protocol} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">{protocol}</span>
              <button className="w-12 h-6 rounded-full bg-accent">
                <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <button className="btn-primary w-full">
        Save Settings
      </button>
    </div>
  );
}
