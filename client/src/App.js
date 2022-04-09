import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter ,Routes, Route ,Link , Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import React from 'react';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return(
    
    <div className="App">
    
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact  element={<Homescreen/>}/>
          <Route path="/cart" exact element ={<Cartscreen/>}/>
          <Route path="/register" exact element ={<Registerscreen/>}/>
          <Route path="/login" exact element ={<Loginscreen/>}/>

        </Routes>  
      </BrowserRouter>
   
     
    </div>
     
  );
}

export default App;
