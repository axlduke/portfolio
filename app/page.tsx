import { Hero } from '@/components'
import About from '@/components/About'
import Image from 'next/image'
import './globals.css'
import Experience from '@/components/Experience'
export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth mx-auto">
      <Hero />
      <About/>
      <Experience/>
    </main>
  )
}
