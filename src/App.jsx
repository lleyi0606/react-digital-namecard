import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content'
import Banner from './components/Banner'
import InfoBox from './components/InfoBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='root-container'>
        <Banner/>
        <Header/>
        <InfoBox/>
      </div>
    </div>

    

  )
}

export default App
