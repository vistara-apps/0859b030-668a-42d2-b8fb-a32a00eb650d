'use client';

import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <AlertTriangle className="w-16 h-16 text-danger mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="text-subtext mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button onClick={reset} className="btn-primary w-full">
          Try Again
        </button>
      </div>
    </div>
  );
}
