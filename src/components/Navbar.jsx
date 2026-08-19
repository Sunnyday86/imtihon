import React from 'react'
import { Link } from 'react-router-dom'
import LightMode from './LightMode'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-around items-center p-5 bg-gray-200'>
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