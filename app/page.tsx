'use client';

import { useState } from 'react';
import { AppShell } from './components/AppShell';
import { Dashboard } from './components/Dashboard';
import { Markets } from './components/Markets';
import { Rebalance } from './components/Rebalance';
import { Settings } from './components/Settings';

type View = 'dashboard' | 'markets' | 'rebalance' | 'settings';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'markets':
        return <Markets />;
      case 'rebalance':
        return <Rebalance />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppShell currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </AppShell>
  );
}
