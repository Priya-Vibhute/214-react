import React, { useState } from 'react'

function Category() {

  const data=["Electronics","Clothes","Groceries"]
  const [categories,setCategories]= useState(data)
  const [value,setValue]=useState("")
  const addCategory=()=>{
    setCategories([...categories,value])
  }
  return (
    <div>

      <input type="text" onChange={(e)=>setValue(e.target.value)} />
      <button onClick={addCategory} >Add category</button>
      <p>Value from input box is {value}</p>
      <ul>
        {categories.map((c,i) => (
          <li key={i}>{c} </li>
        ))}
      </ul>

      <h1>{value}</h1>
    </div>
  );
}

export default Category