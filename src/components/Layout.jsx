import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Layout = () => {
  const { darkMode } = useContext(CartContext)

  return (
    <div className={`w-full min-h-screen transition-colors ${
      darkMode 
        ? 'bg-[#21192b] text-[#f5f2eb]' 
        : 'bg-[#f5f2eb] text-[#21192b]'
    }`}>
        <Navbar/>
        <div className="pt-[80px]">
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout




