import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LightMode from './LightMode'
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { cart, darkMode } = useContext(CartContext)

  return (
    <div>
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-around backdrop-blur-md items-center px-5 py-4 shadow-xl border-b h-[80px] ${
          darkMode
            ? 'bg-[#21192b]/80 text-white border-white/30'
            : 'bg-[#f5f2eb]/80 text-[#21192b] border-gray-300'
        }`}>
            <Link to="/" className={`hover:text-[#b6ff22] transition-colors font-bold ${
              darkMode ? 'text-white' : 'text-[#21192b]'
            }`}>
              🏠 Bosh Sahifa
            </Link>
            <div className={`flex gap-20 ${darkMode ? 'text-white' : 'text-[#21192b]'}`}> 
                <Link to="/shop" className="hover:text-[#b6ff22] transition-colors font-bold">🛍️ do'kon</Link>
                <Link to="/dashbord" className="hover:text-[#b6ff22] transition-colors font-bold">📊 Dashbord</Link>
                <Link to="/savat" className="relative hover:text-[#b6ff22] transition-colors font-bold">
                  🛒 Savat
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cart.length}
                    </span>
                  )}
                </Link>
            </div>
            <LightMode/>    
        </nav>
    </div>
  )
}

export default Navbar



