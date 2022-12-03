import { Home } from './pages/home'

import { Header } from './components/header'
import { Stacks } from './pages/stacks'
import { Bio } from './pages/bio'

import { Element } from 'react-scroll'

export const App = () => {
  return (
    <div className="h-screen bg-grad snap-y snap-mandatory overflow-y-scroll flex flex-col">
      <Header />

      <Home />

      <Bio />

      <Stacks />
    </div>
  )
}
