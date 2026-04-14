import React, { useState } from 'react'

function Controlled() {

  const [name,setName]=useState("Anisha")
  const [error,setError]= useState("")

  const onBtnClick=()=>{
    
        alert("form submitted")
  }

  const onInputChange=(e)=>{
    if (e.target.value.length == 0)
         setError("Name is required");
    else if(e.target.value.length>8)
         setError("Name too long")
    else if(e.target.value.length==1)
         setError("Name too short")
    else 
         setError("");
      setName(e.target.value)
      
  }

  return (
    <div>
        <label htmlFor="">Enter name</label>
        <input type="text" value={name} onChange={(e)=>onInputChange(e)}/>
        <button onClick={onBtnClick}>Click</button>
        <p>{name.length}</p>

        {error && <small className='text-danger'>{error}</small>}

    </div>
  )
}

export default Controlled