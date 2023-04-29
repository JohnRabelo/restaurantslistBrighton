import homecl from './Home.module.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banners2.jpg'
import { useState,useEffect } from 'react';

import ItemOrganizer from '../components/ItemOrganizerTemplate';


const LIST_DATA = [
  {
    Title: 'Dos Sombreros',
    Address: 'SHIP STREET',
    Description: 'Whether enjoying a romantic meal for two or partying with a large group of friends, we’ll make sure you have a fantastic time! Dos Sombreros is also a perfect place for a drink or party!'
  },
  {
    Title: 'THE RAILWAY INN',
    Address: 'PORTSLADE',
    Description: 'The Railway Inn is a large community pub in Portslade. Best known for our great food, friendly staff and welcoming atmosphere, we are a family & dog friendly pub with lots going on throughout the year.',
  }
];


function HomePg() {

  /*const [slideMove, setSlideMove] = useState(false);

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
  }*/

  const [current, setCurrent] = useState(0);
  

  useEffect(()=>{
    let sldLength = 2;
    const next = (current + 1) % sldLength;
    let newMargin = next * 80;
    const id = setTimeout(() => setCurrent(next), 3600);
    document.querySelector('span').style.marginLeft = -newMargin+'vw' ;
    return () => clearTimeout(id);
  }, [current]);

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
      <div className={homecl.statement}>Find your next experience in one best rated restaurants listed below:</div>
      <div className={homecl.listLayout}>  {/*Mix of menuLayout and MenuAreas properties*/}
        <ItemOrganizer List = {LIST_DATA}  />
      </div>
    </div>
  );
  }
  
  export default HomePg;