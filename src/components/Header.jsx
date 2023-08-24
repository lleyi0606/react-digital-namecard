import './styles.css'
import myPhoto from '../assets/myPhoto.jpg'
import photoSquare from '../assets/photoSquare.jpg'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'

function Header() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <img src={photoSquare} className='photo' alt="My photo"></img> 
        <h1 className='name'>Lin Leyi</h1>
        <h2 className='name-small'>Computer Science Student</h2>
        <div className='button-container'>
          <button className='button'>
            <img src={mail} alt="Icon" className='button-icon'></img>
            Email
          </button>
          <button className='button'>
            <img src={linkedin} alt="Icon" className='button-icon'></img>
            LinkedIn
          </button>
        </div>
        
      </>
    )
  }
  
  export default Header