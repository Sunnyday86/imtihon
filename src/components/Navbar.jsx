import React from 'react'
import { Link } from 'react-router-dom'
import LightMode from './LightMode'

const Navbar = () => {
  return (
    <div>
        <nav className=' fixed top-0 left-0 w-full z-50
 flex justify-around backdrop-blur-md   items-center p-5  text-white shadow-xl border-2 border-white '>
            <Link to="/">Bosh Sahifa</Link>
            <div className='flex gap-20'> 
                <Link to="/shop">do'kon</Link>
            <Link to="/savat">Savat</Link>
           
            <Link to="/dashbord">Dashbord</Link>
            </div>
            <LightMode/>    
        </nav>
    </div>
  )
}

export default Navbar