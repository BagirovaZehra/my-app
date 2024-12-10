import './App.css';
import React from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import About from './Components/About';
import Example from './Components/Example';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='App'>
      <div className='menu'>
        <NavLink to="/">Haqqında</NavLink>
        <NavLink to="/example">İş nümunəsi</NavLink>
        <NavLink to="/contact">Əlaqə məlumatları</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/example' element={<Example />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
