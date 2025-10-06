export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-gray-900 font-bold text-2xl">₿</span>
        </div>
        <p className="text-subtext">Loading Base Yield Pilot...</p>
      </div>
    </div>
  );
}
