import React, { useEffect, useState } from "react";

function Recipe() {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      console.log(data);
      setRecipes(data.recipes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {isLoading ? <p>Loading ..............</p> 
        : recipes.map((r)=> <div class="col">
    <div class="card">
      <img src={r.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{r.name}</h5>
        <ul>
            {r.ingredients.map((i)=><li>{i}</li>)}
        </ul>

        {r.tags.map((t)=><span class="badge bg-dark mx-1">{t}</span>)}
      </div>
    </div>
  </div>)}
      </div>
    </div>
  );
}

export default Recipe;
