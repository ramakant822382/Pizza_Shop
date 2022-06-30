
import './App.css';

import {  Route,Routes } from 'react-router-dom';




import Header from './component/Header';
import About from './component/About';
import Shop from './component/Shop';
import Menue from './component/Menue';
import Clints from './component/Clints';
import Prices from './component/Prices';






function App() {
  return (
    <div className="App">
    
   <Routes>
       
       <Route path="/"  element={<Header/>}/>
       <Route path="/menue" element={<Menue/>}  />
       <Route path="/shop" element={<Prices/>} />
       <Route path="/newes" element={<Clints/>} />
       <Route path="/contact" element={<About/>} />

       </Routes>
       
    <About/>
   
    <Shop/>
    <Menue/>
    <Clints/>
    <Prices/>
 
    </div>
  );
}

export default App;
