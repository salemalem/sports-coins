'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Transaction {
  id: string;
  collector: string;
  avatar: string;
  price: string;
  edition: string;
  date: string;
  isRecent: boolean;
}

export default function TransactionHistory() {
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      collector: '@Lakers08x24',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lakers08x24',
      price: '$4,030.00',
      edition: '#2',
      date: '2 hours ago',
      isRecent: true
    },
    {
      id: '2',
      collector: '@CryptoWhale',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoWhale',
      price: '$3,850.00',
      edition: '#5',
      date: '1 day ago',
      isRecent: false
    },
    {
      id: '3',
      collector: '@SportsFan99',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SportsFan99',
      price: '$3,700.00',
      edition: '#8',
      date: '2 days ago',
      isRecent: false
    }
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
    >
      <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center justify-between p-4 rounded-lg ${
              transaction.isRecent ? 'bg-purple-900/20' : 'bg-gray-800/50'
            }`}
          >
            {transaction.isRecent && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  boxShadow: ['0 0 10px #8b5cf6', '0 0 5px #8b5cf6', '0 0 10px #8b5cf6'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={transaction.avatar}
                  alt={transaction.collector}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold">{transaction.collector}</div>
                <div className="text-sm text-gray-400">{transaction.date}</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-green-400 font-bold">{transaction.price}</div>
              <div className="text-sm text-gray-400">Edition {transaction.edition}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}