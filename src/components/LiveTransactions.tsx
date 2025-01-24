'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type Transaction = {
  id: string;
  user: string;
  moment: string;
  price: number;
};

const randomUsernames = [
  'CryptoKing', 'SportsFan', 'NFTCollector', 'BlockchainBaller', 'Web3Wizard',
  'SolanaWhale', 'DiamondHands', 'MoonShot', 'BullRunner', 'TokenMaster'
];

const randomMoments = [
  'Epic Goal by Alex Morgan',
  'Championship Point by Naomi Osaka',
  'Game-Winning Shot by Sue Bird',
  'Record-Breaking Sprint by Thompson',
  'Perfect 10 by Simone Biles'
];

const generateRandomTransaction = (): Transaction => {
  const randomUser = randomUsernames[Math.floor(Math.random() * randomUsernames.length)];
  const randomMoment = randomMoments[Math.floor(Math.random() * randomMoments.length)];
  const randomPrice = +(Math.random() * 10 + 1).toFixed(2);

  return {
    id: Math.random().toString(36).substring(7),
    user: randomUser,
    moment: randomMoment,
    price: randomPrice
  };
};

const LiveTransactions = () => {
  const [transaction, setTransaction] = useState<Transaction>(generateRandomTransaction());

  useEffect(() => {
    const interval = setInterval(() => {
      setTransaction(generateRandomTransaction());
    }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 py-3 z-50">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-sm text-gray-300 flex items-center justify-center space-x-2"
          >
            <span className="text-purple-400 font-semibold">{transaction.user}</span>
            <span>bought</span>
            <span className="text-blue-400 font-medium">'{transaction.moment}'</span>
            <span>for</span>
            <span className="text-green-400 font-bold">{transaction.price} SOL</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveTransactions;