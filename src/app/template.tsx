'use client';

import { WalletContextProvider } from '@/context/WalletContextProvider'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      {children}
    </WalletContextProvider>
  )
}