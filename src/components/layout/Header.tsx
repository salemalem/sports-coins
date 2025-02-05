'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                SportFlix
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/collections" className="text-gray-400 hover:text-white transition-colors">
                Collections
              </Link>
              <Link href="/market" className="text-gray-400 hover:text-white transition-colors">
                Market
              </Link>
              <Link href="/discover" className="text-gray-400 hover:text-white transition-colors">
                Discover
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="[&_.wallet-adapter-button]:!bg-white/10 [&_.wallet-adapter-button]:!backdrop-blur-sm [&_.wallet-adapter-button]:!border-2 [&_.wallet-adapter-button]:!border-purple-500/50 [&_.wallet-adapter-button]:hover:!bg-purple-600 [&_.wallet-adapter-button]:!text-white [&_.wallet-adapter-button]:!transition-all [&_.wallet-adapter-button]:!duration-200 [&_.wallet-adapter-button]:!h-[40px] [&_.wallet-adapter-button]:!px-6 [&_.wallet-adapter-button]:!rounded-full [&_.wallet-adapter-button-trigger]:!content-['Connect_Wallet'] [&_.wallet-adapter-dropdown]:!hidden"
            >
              <WalletMultiButton />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm text-white"
            >
              BETA
            </motion.span>
          </div>
        </div>
      </div>
    </header>
  );
}