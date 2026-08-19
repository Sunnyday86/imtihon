import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  const [products, setProducts] = useState([])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Add to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ))
    }
  }

  // Add product (Dashboard)
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }])
  }

  // Delete product (Dashboard)
  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  // Edit product (Dashboard)
  const editProduct = (productId, updatedProduct) => {
    setProducts(products.map(p =>
      p.id === productId ? { ...p, ...updatedProduct } : p
    ))
  }

  // Toggle theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      products,
      addProduct,
      deleteProduct,
      editProduct,
      darkMode,
      toggleDarkMode
    }}>
      {children}
    </CartContext.Provider>
  )
}
