import React, {useContext} from 'react'
import { LoggedInContext } from '../utils/LoggedContext'


const Login: React.FC = () => {
    interface UserContext{
        loggedIn: any,
        setIsLoggedIn: React.Dispatch<any>
    }

const {loggedIn, setIsLoggedIn} = useContext<UserContext>(LoggedInContext)
  return (
    <div className='flex items-center flex-col justify-center gap-10 mt-64'>
        <h1 className='text-2xl font-semibold'>You're Not Logged In</h1>
        <button onClick={()=> setIsLoggedIn(!loggedIn)} className='p-2 py-3 bg-black text-white hover:bg-blue-500 rounded hover:scale-105 transition-transform'>{loggedIn? 'Log Out' : 'Please Login'}</button>
    </div>
  )
}

export default Login