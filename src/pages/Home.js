import homecl from './Home.module.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banners2.jpg'
import imgDs from '../assets/dsImg.jpg'
import whImg from '../assets/whImg.jpg'
import imgLaChoza from '../assets/lachozaImg.jpg'
import imgTherailway from '../assets/therailwayImg.jpg'
import tortillaImg from '../assets/tortillaImg.jpg'
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
    Title: 'WAHACA',
    Address: 'NORTH ST/ NEW ROAD',
    Description: 'Wahaca Brighton, celebrated for its fresh, social, Mexican market food, has opened a 130-cover restaurant on North St, Brighton. It’s the perfect spot to enjoy amazing food and cocktails with friends, family or on a date! It’s big enough for larger parties of people too, so if you have a celebration coming up, Wahaca’s a winner!',
    ItemImage: whImg,
    GMaps:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5040.630561131187!2d-0.1360629!3d50.8253238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850afade01d9%3A0xc2ba8e20f745ff7!2sWahaca%20Brighton!5e0!3m2!1spt-BR!2sie!4v1682889589272!5m2!1spt-BR!2sie',
    WbSite: 'https://www.wahaca.co.uk/locations/brighton/',
  },  {
    Title: 'LA CHOZA',
    Address: 'GLOUCESTER ROAD',
    Description: 'La Choza was born in 2012, a small but perfectly formed vibrant pink Mexican street food eatery on a tucked-away corner of Gloucester Road in Brighton’s North Laine. The lively creation of lifelong foodies and friends Aoife Sweeney and Annie Gelpey who shared a passion for all things Mexican from Frieda Kahlo to tequila. On a mission to bring the authentic taste of Mexico to their seaside hometown, they made frequent inspiring tasting tours to Mexico where the duo roamed markets, ate at street stalls, and shared meals with locals. They brought the best recipes home with them and created a menu of outstanding and, most importantly, authentic Mexican delights.',
    ItemImage: imgLaChoza,
    GMaps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.2265752464336!2d-0.14429080659701163!3d50.826966987134064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585750eb61871%3A0xf900d0010499b69c!2sLa%20Choza!5e0!3m2!1spt-BR!2sie!4v1682890063347!5m2!1spt-BR!2sie',
    WbSite: 'https://lachoza.co.uk/',
  },
  {
    Title: 'THE RAILWAY INN',
    Address: 'PORTSLADE',
    Description: 'The Railway Inn is a large community pub in Portslade. Best known for our great food, friendly staff and welcoming atmosphere, we are a family & dog friendly pub with lots going on throughout the year.',
    ItemImage: imgTherailway,
    GMaps:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2733.7961448562974!2d-0.2062234220820394!3d50.83598794633397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48759aa2a94e01f9%3A0xe6f0d73d651da51f!2sThe%20Railway%20Inn!5e0!3m2!1sen!2sie!4v1682810365605!5m2!1sen!2sie',
    WbSite: 'https://www.therailwayinnportslade.co.uk/'

  },
  {
    Title: 'Tortilla',
    Address: 'WEST STREET',
    Description: 'Join us at Tortilla Brighton for freshly made, award winning California-style Mexican burritos, tacos and more.',
    ItemImage: tortillaImg,
    GMaps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.434610395947!2d-0.14661322300892474!3d50.82311326046096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875850c998bfae5%3A0xbd0fafd499332e91!2sTortilla%20Brighton!5e0!3m2!1spt-BR!2sie!4v1682890380790!5m2!1spt-BR!2sie',
    WbSite: 'https://www.tortilla.co.uk/restaurants/brighton?utm_source=google&utm_medium=google&utm_campaign=GMB',
  }
];


function HomePg() {



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
      <div className={homecl.listLayout}> 
        <ItemOrganizer List = {LIST_DATA}  />
      </div>
    </div>
  );
  }
  
  export default HomePg;