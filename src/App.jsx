import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Savat from './components/Savat'
import Dashbord from './components/Dashbord'
import Home from './components/Home'
import Shop from './components/Shop'
import { CartProvider } from './context/CartContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/savat',
                element: <Savat />
            },
          
            {
                path: '/dashbord',
                element: <Dashbord />
            }
        ]
    }
])
  

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App