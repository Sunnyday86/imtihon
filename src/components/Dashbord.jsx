import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Dashbord = () => {
  const { products, addProduct, deleteProduct, editProduct, cart, darkMode } = useContext(CartContext)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    thumbnail: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      editProduct(editingId, formData)
      setEditingId(null)
    } else {
      addProduct(formData)
    }
    setFormData({ title: '', price: '', category: '', thumbnail: '' })
    setShowForm(false)
  }

  const handleEdit = (product) => {
    setFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail
    })
    setEditingId(product.id)
    setShowForm(true)
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
  const totalProducts = products.length
  const totalOrders = Math.floor(Math.random() * 50) + 10

  return (
    <div className={`min-h-screen px-[32px] py-[40px] ${
      darkMode
        ? 'bg-[#21192b] text-[#f5f2eb]'
        : 'bg-[#f5f2eb] text-[#21192b]'
    }`}>
      <h1 className="text-4xl font-bold mb-8">📊 Dashbord</h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`rounded-lg p-6 shadow-lg ${
          darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'}`}>
            Jami Mahsulot
          </p>
          <p className="text-3xl font-bold text-[#b6ff22] mt-2">{totalProducts}</p>
        </div>
        <div className={`rounded-lg p-6 shadow-lg ${
          darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'}`}>
            Savat Summa
          </p>
          <p className="text-3xl font-bold text-[#b6ff22] mt-2">${cartTotal}</p>
        </div>
        <div className={`rounded-lg p-6 shadow-lg ${
          darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'}`}>
            Savat Mahsulotlar
          </p>
          <p className="text-3xl font-bold text-[#b6ff22] mt-2">{cart.length}</p>
        </div>
        <div className={`rounded-lg p-6 shadow-lg ${
          darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'}`}>
            Buyurtmalar
          </p>
          <p className="text-3xl font-bold text-[#b6ff22] mt-2">{totalOrders}</p>
        </div>
      </div>

      {/* Add Product Button */}
      <div className="mb-8">
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ title: '', price: '', category: '', thumbnail: '' })
          }}
          className="bg-[#b6ff22] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#a6ef12] transition-all"
        >
          {showForm ? '✕ Bekor qilish' : '+ Yangi Mahsulot'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className={`p-6 rounded-lg shadow-lg mb-8 ${
          darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
        }`}>
          <h2 className="text-2xl font-bold mb-4">
            {editingId ? '✏️ Tahrirlash' : '➕ Yangi Mahsulot'}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Mahsulot nomi"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              className={`p-3 rounded-lg border ${
                darkMode
                  ? 'bg-[#1f1929] border-[#3a3145] text-[#f5f2eb]'
                  : 'bg-white border-gray-300 text-[#21192b]'
              }`}
            />
            <input
              type="number"
              placeholder="Narx"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
              required
              step="0.01"
              className={`p-3 rounded-lg border ${
                darkMode
                  ? 'bg-[#1f1929] border-[#3a3145] text-[#f5f2eb]'
                  : 'bg-white border-gray-300 text-[#21192b]'
              }`}
            />
            <input
              type="text"
              placeholder="Kategoriya"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              required
              className={`p-3 rounded-lg border ${
                darkMode
                  ? 'bg-[#1f1929] border-[#3a3145] text-[#f5f2eb]'
                  : 'bg-white border-gray-300 text-[#21192b]'
              }`}
            />
            <input
              type="url"
              placeholder="Rasm URL"
              value={formData.thumbnail}
              onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
              required
              className={`p-3 rounded-lg border ${
                darkMode
                  ? 'bg-[#1f1929] border-[#3a3145] text-[#f5f2eb]'
                  : 'bg-white border-gray-300 text-[#21192b]'
              }`}
            />
            <button
              type="submit"
              className="col-span-full bg-[#b6ff22] text-black py-3 rounded-lg font-bold hover:bg-[#a6ef12] transition-all"
            >
              {editingId ? '✓ Saqlash' : '✓ Qo\'shish'}
            </button>
          </form>
        </div>
      )}

      {/* Products List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">📦 Qo'shilgan Mahsulotlar</h2>
        {products.length === 0 ? (
          <div className={`text-center py-8 ${
            darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'
          }`}>
            Hali mahsulot qo'shilmagan
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  darkMode ? 'bg-[#30283a]' : 'bg-white border border-gray-300'
                }`}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className={`font-bold text-lg line-clamp-2 ${
                    darkMode ? 'text-[#f5f2eb]' : 'text-[#21192b]'
                  }`}>
                    {product.title}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'
                  }`}>
                    {product.category}
                  </p>
                  <p className="text-2xl font-bold text-[#b6ff22] mt-2">
                    ${product.price}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all"
                    >
                      ✏️ O'zgartirish
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition-all"
                    >
                      🗑️ O'chirish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashbord