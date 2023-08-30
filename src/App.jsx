import './App.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner'
import InfoBox from './components/InfoBox'

function App() {

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
