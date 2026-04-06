import React, { useState } from 'react'

function Recipe() {

    const data = [
      {
        id: 1,
        name: "Classic Margherita Pizza",
        image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      },
      {
        id: 2,
        name: "Vegetarian Stir-Fry",
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      },
      {
        id: 3,
        name: "Chocolate Chip Cookies",
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      },
    ];

    const [recipes,setRecipes]=useState(data)

  return (
    <div>
          { recipes.map((r)=><div key={r.id}>
              <p>{r.id}</p>
              <p>{r.name}</p>
              <img src={r.image} alt="" />
          </div>)}
    </div>
  )
}

export default Recipe