import homecl from './Home.module.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banners2.jpg'
import { useState } from 'react';


function HomePg() {

  const [slideMove, setSlideMove] = useState(false);

  function switchSlide(){
    const windowSize = window.innerWidth;
    setSlideMove(current => !current);
    if (windowSize > 450){
      if (slideMove){
        return document.querySelector('span').style.marginLeft = '0vw';
      }
      else{
        return document.querySelector('span').style.marginLeft = '-80vw';
      }
    }
  }
  


    return (  
      <div>
        <div className={homecl.BannerOrganizer}>
          <div className={homecl.BannerContainer}>
            <span className={homecl.BannerDisplay}>
              <div>
                <img src={banner1} alt=''/>
                <img src={banner2} alt=''/>
              </div>
            </span>
          </div>
        </div>
        <button onClick={switchSlide}>Next</button>
        <div>gfegn<br/>ltr<br/><br/><br/><br/><br/><br/><br/>nilnil vrevrmgigetileigilremlwmgwllmtelgmegmermg
          regmoemgeçgmegmeçwgbm

          emroegrmog
          gmogmegro



          gre,pqo,
        </div>
      </div>
    );
  }
  
  export default HomePg;