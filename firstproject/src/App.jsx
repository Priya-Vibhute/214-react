import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Product from './components/Product'
import Category from './components/Category'
// import './App.css'

function App() {

  return (
    <>
      <h1>First react app</h1>
      <Product id={101} name={"Laptop"} />
      <Product  id={102} name={"Mobile"}/>
      <Product id={103} name={"Headphones"}/>
      <Category />
    </>
  );
}

export default App
