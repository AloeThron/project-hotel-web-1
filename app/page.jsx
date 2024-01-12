import Hero from '@/components/hero'
import Footer from '@/components/footer'
import Header from '@/components/header'
import About from '@/components/about'
import Featured from '@/components/featured'

export default function Home() {
  return (
    <div className='max-w-[1440px] mx-auto bg-white overflow-hidden'>
      <Header />
      <Hero />
      <Featured />
      <About />
      <Footer />
      <div className='h-[4000px]'></div>
    </div>
  )
}