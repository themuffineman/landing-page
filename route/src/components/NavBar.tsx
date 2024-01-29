import React from 'react'


const NavBar: React.FC<{links:string[]}> = ({links}) => {
  return (
    <div className='fixed top-0 left-0 shadow-lg w-screen h-max p-3 bg-white'>
        <ul className='list-none flex justify-center items-center gap-16'>
            {links.map((link) => (
                <li className=' hover:bg-gray-200 rounded-md cursor-pointer hover:outline-1 hover:outline-slate-500 p-2'>{link}</li>
            ))}
        </ul>
    </div>
  )
}

export default NavBar