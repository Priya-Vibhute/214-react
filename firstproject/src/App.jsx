import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Product from './components/Product'
import Category from './components/Category'
import Student from './components/Student'
import Counter from './components/Counter'
import Recipe from './components/Recipe'
// import './App.css'

function App() {
  return (
    <>
     <Counter/>
     <Category/>
     <Recipe/>
    </>
  );
}

export default App
