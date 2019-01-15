import React from 'react'

import Routes from './routes'
import { Navbar } from './components'
import CandyFooter from './components/footer'

const App = () => {
  return (
    <div>
      <Routes />
      <CandyFooter />
    </div>
  )
}

export default App
