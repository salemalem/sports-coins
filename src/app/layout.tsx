import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { WalletContextProvider } from '@/context/WalletContextProvider'
import '@solana/wallet-adapter-react-ui/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SportFlix - Own Iconic Sports Moments',
  description: 'Collect and trade legendary sports moments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}