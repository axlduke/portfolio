import { Hero } from '@/components'
import About from '@/components/About'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth mx-auto">
      <Hero />
      <About/>
    </main>
  )
}
