import navcl from './Nav.module.css'
import BRBLogo from '../assets/BRBLogo.png'
import MexLogo from '../assets/MexLogo.png' 
import hbgIcon from '../assets/hbg.JPG'
import {Outlet, NavLink} from "react-router-dom"

function NavBar() {
    return (  
      <div>
        <div className={navcl.navOrganizer}>
          <div className={navcl.navLogo}>
            <img src={BRBLogo} alt='' />
          </div>
          <div className={navcl.navMenu}>
            <ul>
              <li><NavLink to='/' className={navcl.navigLink}> Home</NavLink></li>
              <li><NavLink to='/contact' className={navcl.navigLink}>Contact</NavLink></li>
            </ul>
          </div>
          <div className={navcl.menuOpenerContainer}>
            <img src={hbgIcon} alt='' />
          </div>
          <div className={navcl.navLogo2}>
              <img src={MexLogo} alt='' />
          </div>
        </div>
        <Outlet/>
      </div>
    );
  }
  
  export default NavBar;