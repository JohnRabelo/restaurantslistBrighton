import {Routes, Route} from "react-router-dom"
import HomePg from "./pages/Home";
import ContactPg from "./pages/Contact";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePg/>} />
        <Route path='contact' element={<ContactPg/>}/>
      </Routes>
    </div>
  );
}

export default App;
