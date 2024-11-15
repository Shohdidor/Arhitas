import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Catalog from './page/Catalog/Catalog'
import Profile from './page/Profile/Profile'
import Menu from './page/Menu/Menu'
import Information from './page/Information/Information'

const App = () => {
  const router = createBrowserRouter ( [ 
    {
      path : "/",
      element : <Layout />,
      children : [
        { 
          index : true,
          element : <Menu />
        },
        {
          path : "catalog/:category",
          element : <Catalog />
        },
        {
          path : "Profile/:id",
          element : <Profile />
        },
        {
          path : "Information/:id",
          element : <Information />
        }
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App