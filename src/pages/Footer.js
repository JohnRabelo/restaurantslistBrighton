import footercl from './Footer.module.css'
import { Outlet } from 'react-router-dom';

function FooterComponent() {
    return (
      <div>
        <Outlet />
        <div className={footercl.footerContainer}>
            <div className={footercl.creators}>Project by <span>J. Rabelo</span></div>
        </div>
      </div>
    );
  }
  
  export default FooterComponent;
  