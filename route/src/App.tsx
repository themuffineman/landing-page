import React from 'react'
import NavBar from './components/NavBar'
import NavLinks from './utils/NavLinks'
import Footer from './components/Footer'
import FooterLinks from './utils/FooterLinks'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar links={NavLinks} />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <div>
        <Footer FooterLinks={FooterLinks}/>
      </div>

    </BrowserRouter>
   
  )
}

export default App