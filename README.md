# Sports Collectibles Platform

A Next.js-based platform for investing in athletes' career moments using Solana blockchain technology.

## Features

- 🏃‍♀️ Athlete Profile System
- 💎 3D Interactive Collectible Cards
- 🌟 Career Moments Marketplace
- 👥 Fan Investment Platform
- 🔗 Solana Wallet Integration
- 🎨 Responsive Design with Tailwind CSS
- ⚡ Real-time Transaction Updates

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, React Three Fiber
- **Animations:** Framer Motion
- **Blockchain:** Solana Web3.js
- **Wallet:** Solana Wallet Adapter
- **TypeScript:** For type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Solana wallet (e.g., Phantom)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sports-collectibles
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── 3d/             # Three.js components
│   └── ...             # Other components
├── context/            # React context providers
├── data/              # Static data and types
└── ...
```

## Key Components

- `Hero`: Landing page hero section
- `MomentCard`: 3D interactive collectible card
- `Marketplace`: NFT marketplace interface
- `WomensFootball`: Women's sports section
- `LiveTransactions`: Real-time transaction feed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.