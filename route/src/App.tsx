import React from 'react'
import NavBar from './components/NavBar'
import NavLinks from './utils/NavLinks'
import Footer from './components/Footer'
import FooterLinks from './utils/FooterLinks'
import Home from './components/Home'


const App: React.FC = () => {
  return (
    <div>
     <NavBar links={NavLinks} />
     <Home/>
     <Footer FooterLinks={FooterLinks}/>
    </div>
  )
}

export default App