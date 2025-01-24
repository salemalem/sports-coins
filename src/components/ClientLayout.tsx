'use client';

import { WalletContextProvider } from '@/context/WalletContextProvider'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      {children}
    </WalletContextProvider>
  )
}