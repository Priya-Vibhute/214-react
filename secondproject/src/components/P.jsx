import React, { useContext } from 'react'
import { UserContext } from './M'

function P() {

 const user= useContext(UserContext)

  return (
    <div>
      <h4>P component</h4>
      <p>{user.username}  {user.password}</p>
    </div>
  )
}

export default P