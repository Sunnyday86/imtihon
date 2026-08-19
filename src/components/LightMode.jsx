import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const LightMode = () => {
  const { darkMode, toggleDarkMode } = useContext(CartContext)

  return (
    <div>
        <button 
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            darkMode
              ? 'bg-[#b6ff22] text-black hover:bg-[#a6ef12]'
              : 'bg-gray-700 text-white hover:bg-gray-800'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    </div>
  )
}

export default LightMode
