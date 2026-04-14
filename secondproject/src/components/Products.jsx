import React, { useEffect, useState } from 'react'

function Products() {

  const [products,setProducts]=useState(null);

  const fetchProducts=async ()=>{
    try {
      const response=await fetch("https://fakestoreapi.com/products");
      const data=await response.json();
      setProducts(data)
      console.log(data)
       
    } catch (error) {
       console.log(error);   
    }
  }

    useEffect(() => {
      fetchProducts();
    }, []);


  return (
    <div>

      <div class="row row-cols-1 row-cols-md-3 g-4">

       {products ?  
       products.map((p)=> <div class="col">
    <div class="card">
      <img src={p.image}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{p.title}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
      </div>)
       : <p>Something went wrong</p>}

       </div>
    </div>
  )
}

export default Products