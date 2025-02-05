'use client';

import { FC, ReactNode, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  const wallets = useMemo(
    () => [
      /**
       * Select the wallets you wish to support
       * We only support Phantom for now to avoid extension conflicts
       */
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};