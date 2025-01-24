import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const FeaturedSports = dynamic(() => import('@/components/FeaturedSports'), { ssr: false })
const WomensFootball = dynamic(() => import('@/components/WomensFootball'), { ssr: false })
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: false })
const Marketplace = dynamic(() => import('@/components/Marketplace'), { ssr: false })
const Community = dynamic(() => import('@/components/Community'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const LiveTransactions = dynamic(() => import('@/components/LiveTransactions'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedSports />
      <WomensFootball />
      <HowItWorks />
      <Marketplace />
      <Community />
      <About />
      <Footer />
      <LiveTransactions />
    </main>
  )
}