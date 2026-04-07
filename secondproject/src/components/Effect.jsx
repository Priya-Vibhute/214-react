import React, { useEffect, useState } from 'react'

function Effect() {

 const [count,setCount]= useState(0)

  useEffect(()=>{
    
   const timer= setTimeout(()=>{
      console.log(count);
    },5000)

 // cleanup function
//  return ()=>{}
    return ()=>{
      clearTimeout(timer)
    }

  },[count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Effect