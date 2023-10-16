import { useState } from 'react'
import {Header, Hero, Footer} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
