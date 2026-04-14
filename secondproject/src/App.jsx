import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Layout from './components/common/Layout'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Recipe from './components/Recipe'
import Effect from './components/Effect'
import Uncontrolled from './components/Uncontrolled'
import Controlled from './components/Controlled'
import Controlled2 from './components/common/Controlled2'
import Login from './components/Login'
import Register from './components/Register'
import A from './components/A'
import M from './components/M'
import { LoginProvider } from './context/LoginContext'
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
      },
      {
        path:'useeffect-example',
        element:<Effect/>
      },
      {
        path:'uncontrolled-form',
        element:<Uncontrolled/>
      },
      {
        path:'controlled-form',
        element:<Controlled/>
      },
      {
        path:'controlled-form-2',
        element:<Controlled2/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'context-example-1',
        element:<A/>
      },
      {
        path:'context-example',
        element:<M/>
      }
    ]
  }
])



function App() {
 
  return (
    <>
      <LoginProvider>
          <RouterProvider router={router} />
      </LoginProvider>
    </>
  );
}

export default App
