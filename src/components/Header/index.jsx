import { FaHome , FaSitemap,FaThumbsUp, FaCogs} from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import './index.css'

const Header = () => {
  return (
    <main className='HeaderContainer'>
      <div className="logoContainer">
        <p className='logo'>
          <a href="">TecXervice</a>
        </p>
      </div>
      <div className="menu">
        <ul>
          <li><FaHome/><a href="">Home</a></li>
          <li><FaCogs/><a href="">Services</a></li>
          <li><FaSitemap/><a href="">Branches</a></li>
          <li><FaThumbsUp/><a href="">Reviews</a></li>
          <li><FaEnvelope/><a href="">Contact</a></li>
        </ul>
      </div>
    </main>
  )
}

export default Header