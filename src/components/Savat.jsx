import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Savat = () => {
  const { cart, removeFromCart, updateQuantity, darkMode } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)

  return (
    <div className={`min-h-screen px-[32px] py-[40px] ${
      darkMode
        ? 'bg-[#21192b] text-[#f5f2eb]'
        : 'bg-[#f5f2eb] text-[#21192b]'
    }`}>
      <h1 className="text-4xl font-bold mb-8">🛒 Savat</h1>

      {cart.length === 0 ? (
        <div className={`text-center py-20 text-xl ${
          darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'
        }`}>
          Savat bo'sh. Mahsulot qo'shishni boshlang!
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-4 p-4 rounded-lg shadow-lg ${
                    darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
                  }`}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg ${
                      darkMode ? 'text-[#f5f2eb]' : 'text-[#21192b]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                      darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'
                    }`}>
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-[#b6ff22] text-black px-3 py-1 rounded font-bold hover:bg-[#a6ef12]"
                      >
                        −
                      </button>
                      <span className="font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-[#b6ff22] text-black px-3 py-1 rounded font-bold hover:bg-[#a6ef12]"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`ml-auto px-4 py-1 rounded font-bold transition-all ${
                          darkMode
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-red-500 text-white hover:bg-red-600'
                        }`}
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#b6ff22]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className={`p-6 rounded-lg shadow-lg h-fit ${
              darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-[#f5f2eb]' : 'text-[#21192b]'
              }`}>
                Jami
              </h2>
              <div className={`space-y-2 mb-4 pb-4 border-b ${
                darkMode ? 'border-[#3a3145]' : 'border-gray-300'
              }`}>
                <div className="flex justify-between">
                  <span>Mahsulotlar:</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} ta</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#b6ff22]">
                  <span>Jami:</span>
                  <span>${total}</span>
                </div>
              </div>
              <button className="w-full bg-[#b6ff22] text-black py-3 rounded-lg font-bold hover:bg-[#a6ef12] transition-all">
                Sotib olish
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Savat