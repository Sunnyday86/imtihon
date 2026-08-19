import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Savat from './components/Savat'
import Dashbord from './components/Dashbord'
import Home from './components/Home'
import Shop from './components/Shop'
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
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App