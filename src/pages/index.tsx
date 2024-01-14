import Head from 'next/head'
import { Header } from '../components/Header'
import { Home } from '../components/Sections/Home'
import { Bio } from '../components/Sections/Bio'
import { Stacks } from '../components/Sections/Stacks'
import { Project } from '../components/Sections/Projects'
import { GitHub } from '../components/Sections/GitHub'

export default function App() {
  return (
    <main className="mx-auto snap-y snap-mandatory h-screen  overflow-y-scroll">
      <Header>
        <Home />
        <Bio />
        <Stacks />
        <Project />
        <GitHub/>
      </Header>
    </main>
  )
}
