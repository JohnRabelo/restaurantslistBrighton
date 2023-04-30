import homecl from './Home.module.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banners2.jpg'
import imgDs from '../assets/dsImg.jpg'
import imgTherailway from '../assets/therailwayImg.jpg'
import { useState,useEffect } from 'react';

import ItemOrganizer from '../components/ItemOrganizerTemplate';


const LIST_DATA = [
  {
    Title: 'Dos Sombreros',
    Address: 'SHIP STREET',
    Description: 'Whether enjoying a romantic meal for two or partying with a large group of friends, we’ll make sure you have a fantastic time! Dos Sombreros is also a perfect place for a drink or party!',
    ItemImage: imgDs,
    GMaps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.490253556647!2d-0.14387618404627003!3d50.82208246839767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850ba0669c41%3A0xf8c2c9d9011e8ab!2sDos%20Sombreros!5e0!3m2!1sen!2sie!4v1681155619625!5m2!1sen!2sie',
    WbSite: 'http://dossombreros.co.uk/',
  },
  {
    Title: 'THE RAILWAY INN',
    Address: 'PORTSLADE',
    Description: 'The Railway Inn is a large community pub in Portslade. Best known for our great food, friendly staff and welcoming atmosphere, we are a family & dog friendly pub with lots going on throughout the year.',
    ItemImage: imgTherailway,
    GMaps:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2733.7961448562974!2d-0.2062234220820394!3d50.83598794633397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48759aa2a94e01f9%3A0xe6f0d73d651da51f!2sThe%20Railway%20Inn!5e0!3m2!1sen!2sie!4v1682810365605!5m2!1sen!2sie',
    WbSite: 'https://www.therailwayinnportslade.co.uk/'

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