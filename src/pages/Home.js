import homecl from './Home.module.css'

function HomePg() {
    return (  
      <div>
      <div>Select one of the restaurants from the list to get more info. </div>
      <div>Project by <span className={homecl.creators}>John Rabelo</span></div>
      </div>
    );
  }
  
  export default HomePg;