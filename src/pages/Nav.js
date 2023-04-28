import navcl from './Nav.module.css'
import BRBLogo from '../assets/BRBLogo.png'
import MexLogo from '../assets/MexLogo.png' 
import hbgIcon from '../assets/hbg.JPG'
import {Outlet, NavLink} from "react-router-dom"
import { useState } from 'react'


function NavBar() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function switchMenu(){
      const windowSize = window.innerWidth;
      setMenuIsOpen(current => !current);
      if (windowSize < 450){
        if (menuIsOpen){
          return document.querySelector('nav').style.display = 'flex';
        }
        else{
          return document.querySelector('nav').style.display = 'none';
        }
      }
    }

    return (  
      <div>
        <div className={navcl.navOrganizer}>
          <div className={navcl.navLogo}>
            <img src={BRBLogo} alt='' />
          </div>
          <nav className={navcl.navMenu}>
            <ul>
              <li><NavLink to='/' className={navcl.navigLink} onClick={switchMenu}> Home</NavLink></li>
              <li><NavLink to='/contact' className={navcl.navigLink} onClick={switchMenu}>Contact</NavLink></li>
            </ul>
          </nav>
          <div className={navcl.menuOpenerContainer} onClick={switchMenu}>
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