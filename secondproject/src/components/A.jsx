import React from 'react'
import B from './B'
import { useState } from 'react'

function A() {

  const [message,setMessage]=useState("Message from A component :Hello")
  return (
    <div>
        <h4>A component</h4>
        <p>{message}</p>
        <hr/>
        <B data={message}/>
    </div>
  )
}

export default A