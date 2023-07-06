import { Hero, About, Experience, Skill, Projects } from '@/components'
import Image from 'next/image'
import './globals.css'
export default function Home() {
  return (
    <main className="overflow-hidden scroll-smooth mx-auto">
      <Hero />
      <About/>
      <Experience/>
      <Skill/>
      <Projects/>
    </main>
  )
}
