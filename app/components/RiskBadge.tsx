'use client';

interface RiskBadgeProps {
  risk: 'low' | 'medium' | 'high';
}

export function RiskBadge({ risk }: RiskBadgeProps) {
  const styles = {
    low: 'bg-positive/20 text-positive border-positive/30',
    medium: 'bg-warning/20 text-warning border-warning/30',
    high: 'bg-danger/20 text-danger border-danger/30',
  };

  const labels = {
    low: 'Low Risk',
    medium: 'Medium Risk',
    high: 'High Risk',
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${styles[risk]}`}>
      {labels[risk]}
    </span>
  );
}
