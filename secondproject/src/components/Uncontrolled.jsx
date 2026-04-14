import React, { useRef } from 'react'

function Uncontrolled() {

 const input= useRef();
 const onBtnClick=()=>{
    console.log(input.current.value);
    
 }
  return (
    <div>
        <label htmlFor="">Enter name</label>
        <input type="text" ref={input}/>
        <button onClick={onBtnClick}>Click</button>
    </div>
  )
}

export default Uncontrolled