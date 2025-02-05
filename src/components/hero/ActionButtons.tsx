'use client';

import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ActionButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
      <motion.button
        className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg group relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Create Athlete Profile
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="[&_.wallet-adapter-button]:!bg-white/10 [&_.wallet-adapter-button]:!backdrop-blur-sm [&_.wallet-adapter-button]:!border-2 [&_.wallet-adapter-button]:!border-purple-500/50 [&_.wallet-adapter-button]:hover:!bg-purple-600 [&_.wallet-adapter-button]:!text-white [&_.wallet-adapter-button]:!transition-all [&_.wallet-adapter-button]:!duration-200 [&_.wallet-adapter-button]:!h-[52px] [&_.wallet-adapter-button]:!px-8 [&_.wallet-adapter-button]:!rounded-full [&_.wallet-adapter-button-trigger]:!content-['Connect_Wallet'] [&_.wallet-adapter-dropdown]:!hidden"
      >
        <WalletMultiButton />
      </motion.div>
    </div>
  );
};

export default ActionButtons;