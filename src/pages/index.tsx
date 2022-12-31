import Head from 'next/head'
import { Header } from '../components/Header'
import { Home } from '../components/Sections/Home'
import { Bio } from '../components/Sections/Bio'
import { Stacks } from '../components/Sections/Stacks'
import { Project } from '../components/Sections/Projects'

export default function App() {
  return (
    <>
      <Head>
        <title>Alisson Peixer</title>
        <meta
          name="description"
          content="Me proponha um desafio, que le darei a solução!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto snap-y snap-mandatory h-screen  overflow-y-scroll">
        <Header>
          <Home />
          <Bio />
          <Stacks />
          <Project />
        </Header>
      </main>
    </>
  )
}
