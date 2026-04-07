import React, { useEffect, useState } from 'react'

function Products() {

  const [products,setProducts]=useState(null);
  
  const fetchProducts=async ()=>{
    try {
      const response=await fetch("https://fakestoreapi.com/products");
      const data=await response.json();
      console.log(data)
       
    } catch (error) {
       console.log(error);   
    }
  }

    useEffect(() => {
      fetchProducts();
    }, []);


  return (
    <div>Products</div>
  )
}

export default Products