'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { WalletContextProvider } from '@/context/WalletContextProvider';
import Header from '@/components/layout/Header';
import LoadingScreen from '@/components/LoadingScreen';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log('Current route:', pathname);
  }, [pathname]);

  useEffect(() => {
    // Start loading content immediately
    const contentPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(true);
      } else {
        window.addEventListener('load', () => resolve(true), { once: true });
      }
    });

    // Minimum loading time for animation
    const animationPromise = new Promise(resolve => setTimeout(resolve, 2000));

    // Load content first, then wait for animation
    contentPromise.then(() => {
      setShowContent(true); // Content is loaded but still hidden
      animationPromise.then(() => {
        setIsLoading(false); // Now hide the loading screen
      });
    });
  }, []);

  return (
    <WalletContextProvider>
      {/* Always render content but hide it when loading */}
      <div className={showContent ? 'block' : 'hidden'}>
        <Header />
        {children}
      </div>
      
      {/* Show loading screen until animation is complete */}
      {isLoading && <LoadingScreen />}
    </WalletContextProvider>
  );
}