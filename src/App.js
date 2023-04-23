import React from 'react';
import './App.css';
import '/node_modules/primeflex/primeflex.css';

import Header from './components/header';
import About from './components/about';
import Hero from './components/hero';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
