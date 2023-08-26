import './styles.css'
import photoSquare from '../assets/photoSquare.jpg'

function Header() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='header-container'>
          <img src={photoSquare} className='photo' alt="My photo"></img> 
          <div>
            <h1 className='name'>Lin Leyi</h1>
            <h2 className='name-small'>Computer Science Student</h2>
          </div>

        </div>


        
      </>
    )
  }
  
  export default Header