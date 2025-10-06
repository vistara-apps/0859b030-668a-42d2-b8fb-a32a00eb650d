# Base Yield Pilot

Smart, gas-aware rebalancing and yield intelligence for Base power users.

## Features

- **Real-Time Yield Feed**: Aggregated APY/APR across Aave v3, Moonwell, Seamless, and Aerodrome
- **Smart Rebalance Suggestions**: Gas-aware recommendations to optimize yield
- **Health Factor Monitor**: Track collateralization and prevent liquidations
- **Risk-Aware Analytics**: Comprehensive risk scoring for all markets
- **Mobile-First Design**: Optimized for Base MiniApp experience

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom finance theme
- **TypeScript**: Full type safety

## Subscription Tiers

- **Free**: Read-only access + 3 alerts/month
- **Pro ($19/mo)**: Unlimited alerts, simulations, 1-click execution
- **Treasury ($99/mo)**: Multi-wallet, policy guardrails, export

## License

MIT
