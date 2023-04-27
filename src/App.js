import {Routes, Route} from "react-router-dom"
import HomePg from "./pages/Home";
import ContactPg from "./pages/Contact";
import NavBar from "./pages/Nav";
import FooterComponent from "./pages/Footer";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route path='/' element={<FooterComponent />} >
            <Route index element={<HomePg/>} />
            <Route path='contact' element={<ContactPg/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
