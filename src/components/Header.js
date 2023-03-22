import { Link } from 'react-router-dom';
import GoBackIcon from '../assets/images/GoBackIcon.png';
import MicIcon from '../assets/images/MicIcon.png';
import SettingsIcon from '../assets/images/SettingsIcon.png';

const Header = () => (
  <header>
    <nav>
      <button type="button" className="navigation-icons"><Link to="/"><img src={GoBackIcon} alt="Go back icon" /></Link></button>
      <h1>the NBA DB</h1>
      <div>
        <button type="button" className="navigation-icons"><img src={MicIcon} alt="Go back icon" /></button>
        <button type="button" className="navigation-icons"><img src={SettingsIcon} alt="Go back icon" /></button>
      </div>
    </nav>
  </header>
);

export default Header;
