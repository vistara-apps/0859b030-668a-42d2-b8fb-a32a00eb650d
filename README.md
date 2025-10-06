# Base Yield Pilot

A modern DeFi yield farming application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Multi-Theme Support**: Switch between Default, CELO, Solana, Base, and Coinbase themes
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🚀 **Modern UI/UX**: Clean, intuitive interface with smooth animations
- 💰 **Yield Dashboard**: Track your DeFi positions and earnings
- 🔗 **Multi-Chain**: Support for multiple blockchain networks
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## Pages

- **Home**: Landing page with hero section, stats, and yield opportunities
- **Dashboard**: Personal portfolio overview with active positions and metrics
- **Navigation**: Seamless navigation between different sections

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom UI components with Radix UI primitives

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
app/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── navigation.tsx
│   ├── theme-switcher.tsx
│   └── ThemeProvider.tsx
├── dashboard/
│   └── page.tsx      # Dashboard page
├── globals.css       # Global styles and theme variables
├── layout.tsx        # Root layout
└── page.tsx          # Home page

lib/
└── utils.ts          # Utility functions
```

## Themes

The application supports 5 different themes:
- **Default**: Clean light/dark theme
- **CELO**: CELO blockchain branding (yellow/black)
- **Solana**: Solana blockchain branding (purple gradient)
- **Base**: Base blockchain branding (blue theme)
- **Coinbase**: Coinbase branding (blue/dark theme)

## Key Improvements Made

1. **Complete UI/UX Overhaul**: Created a modern, professional interface
2. **Responsive Design**: Mobile-first approach with proper breakpoints
3. **Theme System**: Advanced multi-blockchain theme switching
4. **Component Architecture**: Reusable, well-structured components
5. **Navigation**: Intuitive navigation between pages
6. **Performance**: Optimized for production with static export
7. **Accessibility**: Proper semantic HTML and ARIA attributes

## License

MIT License - feel free to use this project as a starting point for your own DeFi applications.