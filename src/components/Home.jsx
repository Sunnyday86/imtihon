import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Home = () => {
  const { darkMode } = useContext(CartContext)

  return (
    <div className={`min-h-screen px-8 py-16 ${
      darkMode
        ? 'bg-[#21192b] text-[#f5f2eb]'
        : 'bg-[#f5f2eb] text-[#21192b]'
    }`}>
      <div className="mx-auto max-w-6xl pt-20">
        <h1 className={`text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.06em] ${
          darkMode ? 'text-[#f5f2eb]' : 'text-[#21192b]'
        }`}>
          XUSH 
          <span className="block text-[#b6ff22]">
            KELIBSIZ.
          </span>
        </h1>
        
        <p className={`mt-10 max-w-xl text-xl leading-8 ${
          darkMode ? 'text-[#aaa1b2]' : 'text-gray-700'
        }`}>
          Kerakli mahsulotni tanlang, savatga qo'shing va buyurtmangizni osonlik bilan rasmiylashtiring.
        </p>

        <Link to="/shop">
          <button className="mt-10 rounded-full bg-[#b6ff22] cursor-pointer px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-[#a6ef12]">
            🛍️ Xaridni boshlash
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home

