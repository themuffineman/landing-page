import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { LoggedInContext } from '../utils/LoggedContext'


const NavBar: React.FC<{links:string[]}> = ({links}) => {

  interface UserContext{
    loggedIn: any,
    setIsLoggedIn: React.Dispatch<any>
  }

  const {loggedIn, setIsLoggedIn} = useContext<UserContext>(LoggedInContext)

  return (
    <div className='fixed top-0 left-0 shadow-lg w-screen flex justify-around items-center h-max p-3 gap-24 bg-white'>
        <ul className='list-none flex justify-center items-center gap-16'>
            {links.map((link) => (
                <Link to={link === 'home'? '/' : link}>
                  <li key={link} className=' capitalize hover:bg-gray-200 rounded-md cursor-pointer hover:outline-1 hover:outline-slate-500 p-2'>{link}</li>
                </Link>
            ))}
        </ul>
        <button onClick={()=> setIsLoggedIn(!loggedIn)} className='p-2 py-3 bg-black text-white hover:bg-blue-500 rounded hover:scale-105 transition-transform'>{loggedIn? 'Log Out' : 'Please Login'}</button>
    </div>
  )
}

export default NavBar