import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import SharedLayout from './components/SharedLayout'
import { LoggedInContext } from './utils/LoggedContext'
import Login from './components/Login'
import { useLocalStorage } from './utils/useLocalStorage'


const App: React.FC = () => {

  const [loggedIn, setIsLoggedIn ] = useLocalStorage('loggedIn', false)



  return (
    <>
      <LoggedInContext.Provider value={{loggedIn, setIsLoggedIn}} >

      <Router>
        
        <Routes>

          <Route path='/login' element={loggedIn? <Navigate to='/'/> :<Login/>}/>

          <Route path='/' element={loggedIn? <SharedLayout/> : <Navigate to='login'/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={!loggedIn? <Navigate to='login'/> : <About/>}/>
            <Route path='features' element={!loggedIn? <Navigate to='login'/> : <Features/>}/>
            <Route path='pricing' element={!loggedIn? <Navigate to='login'/> : <Pricing/>}/>
            <Route path='contact' element={!loggedIn? <Navigate to='login'/> : <Contact/>}/>
          </Route>

          <Route path="*" element={<NotFound/>}/>

        </Routes>
        
        
      </Router>

      </LoggedInContext.Provider>
    </>
  );
};






export default App