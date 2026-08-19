import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  useEffect(() => {
    const getProducts = async () => {
      const url = category === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${category}`;
      const res = await axios.get(url);
      setProducts(res.data.products);
    };
    getProducts();
  }, [category]);

  return (
   <div className="min-h-screen bg-[#21192b] px-[32px] py-[40px] text-[#f5f2eb]">

  {/* CATEGORY */}
  <div className="flex gap-[10px]">

    {categoriesList.map((cat) => (
      <button
        key={cat.slug}
        onClick={() => setCategory(cat.slug)}
        className={`rounded-full px-[20px] py-[9px] cursor-pointer text-[16px] font-medium transition-all ${
          category === cat.slug
            ? "bg-[#b6ff22] text-black"
            : "bg-[#30283a] text-[#f5f2eb] hover:bg-[#3a3145]"
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
        className="overflow-hidden rounded-[16px] cursor-pointer bg-[#30283a] transition-all hover:-translate-y-[4px] shadow-lg"
      >

        <div className="relative w-full bg-[#1f1929] aspect-square overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-[16px]">

          <p className="text-[13px] text-[#aaa1b2]">
            {product.category}
          </p>

          <h2 className="mt-[8px] line-clamp-1 text-[18px] font-bold">
            {product.title}
          </h2>

          <div className="mt-[12px] flex items-center justify-between">

            <p className="text-[18px] font-bold text-[#b6ff22]">
              ${product.price}
            </p>

            <button className="rounded-full bg-[#b6ff22] px-[14px] py-[7px] text-[14px] font-bold text-black">
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