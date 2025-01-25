import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

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
        <Header />
        <div className="pt-16"> {/* Add padding to account for fixed header */}
          {children}
        </div>
      </body>
    </html>
  )
}