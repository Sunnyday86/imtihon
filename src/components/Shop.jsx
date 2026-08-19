import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CartContext } from '../context/CartContext'

const categoriesList = [
  {
    name: "Hammasi",
    slug: "all",
  },
  {
    name: "Erkaklar oyoq kiyimi",
    slug: "mens-shoes",
  },
  {
    name: " Erkaklar kiyimi",
    slug: "mens-shirts",
  },
  {
    name: "Ayollar taqinchoqlari",
    slug: "womens-jewellery",
  },
  {
    name: "Telefonlar",
    slug: "smartphones",
  },
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const { addToCart, darkMode } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const url = category === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${category}`;
      const res = await axios.get(url);
      setProducts(res.data.products);
    };
    getProducts();
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.title} savatga qo'shildi!`);
    setTimeout(() => setNotification(""), 2000);
  }

  return (
   <div className={`min-h-screen px-[32px] py-[40px] ${
     darkMode
       ? 'bg-[#21192b] text-[#f5f2eb]'
       : 'bg-[#f5f2eb] text-[#21192b]'
   }`}>

    {notification && (
      <div className="fixed top-[100px] right-5 bg-[#b6ff22] text-black px-4 py-2 rounded-lg shadow-lg">
        {notification}
      </div>
    )}

  {/* CATEGORY */}
  <div className="flex gap-[10px] flex-wrap">

    {categoriesList.map((cat) => (
      <button
        key={cat.slug}
        onClick={() => setCategory(cat.slug)}
        className={`rounded-full px-[20px] py-[9px] cursor-pointer text-[16px] font-medium transition-all ${
          category === cat.slug
            ? "bg-[#b6ff22] text-black"
            : darkMode
              ? "bg-[#30283a] text-[#f5f2eb] hover:bg-[#3a3145]"
              : "bg-gray-300 text-[#21192b] hover:bg-gray-400"
        }`}
      >
        {cat.name}
      </button>
    ))}

  </div>

  {/* PRODUCTS */}
  <div className="mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">

    {products.map((product) => (
      <div
        key={product.id}
        className={`overflow-hidden rounded-[16px] cursor-pointer transition-all hover:-translate-y-[4px] shadow-lg ${
          darkMode
            ? 'bg-[#30283a]'
            : 'bg-white border border-gray-300'
        }`}
      >

        <div className={`relative w-full aspect-square overflow-hidden ${
          darkMode ? 'bg-[#1f1929]' : 'bg-gray-200'
        }`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-[16px]">

          <p className={`text-[13px] ${
            darkMode ? 'text-[#aaa1b2]' : 'text-gray-600'
          }`}>
            {product.category}
          </p>

          <h2 className={`mt-[8px] line-clamp-1 text-[18px] font-bold ${
            darkMode ? 'text-[#f5f2eb]' : 'text-[#21192b]'
          }`}>
            {product.title}
          </h2>

          <div className="mt-[12px] flex items-center justify-between">

            <p className="text-[18px] font-bold text-[#b6ff22]">
              ${product.price}
            </p>

            <button 
              onClick={() => handleAddToCart(product)}
              className="rounded-full bg-[#b6ff22] px-[14px] py-[7px] text-[14px] font-bold text-black hover:bg-[#a6ef12] transition-all"
            >
              +
            </button>

          </div>

        </div>

      </div>
    ))}

  </div>

</div>
  )
}

export default Shop