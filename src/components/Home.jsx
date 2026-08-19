import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#21192b] px-8 py-16 text-[#f5f2eb]">
  <div className="mx-auto max-w-6xl pt-20">
    <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.06em]">
      XUSH 
      <span className="block text-[#b6ff22]">
        KELIBSIZ.
      </span>
    </h1>
    
    <p className="mt-10 max-w-xl text-xl leading-8 text-[#aaa1b2]">
      Kerakli mahsulotni tanlang, savatga qo'shing va buyurtmangizni osonlik bilan rasmiylashtiring.
    </p>

    <Link to="/shop">
    <button className="mt-10 rounded-full bg-[#b6ff22] cursor-pointer px-8 py-4 text-lg font-bold text-black transition hover:scale-105">
      
      Xaridni boshlash
    </button>
    </Link>
  </div>
</div>

  )
}

export default Home

