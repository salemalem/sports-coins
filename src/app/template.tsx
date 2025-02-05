'use client';

import { WalletContextProvider } from '@/context/WalletContextProvider'
import Header from '@/components/layout/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      <Header />
      {children}
    </WalletContextProvider>
  )
}