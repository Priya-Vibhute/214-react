import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Layout from './components/common/Layout'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Recipe from './components/Recipe'
// import './App.css'

const router=createBrowserRouter([
  { 
    path:"",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/recipes',
        element:<Recipe/>
      }
    ]
  }
])



function App() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
