import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Savat from './components/Savat'
import Dashbord from './components/Dashbord'
import Home from './components/Home'
import Shop from './components/Shop'
import LightMode from './components/LightMode'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
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
                path: '/light-mode',
                element: <LightMode />
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
    <div router={router}>  rApp    </div>
  )
}

export default App