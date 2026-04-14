import React, { createContext, useState } from 'react'
import N from './N'

// create context
export const UserContext=createContext()

function M() {

  const [user,setUser]=useState({username:"Nisha",
           password:'User@123'}
          )
  return (
    <div>
      <h4>M component</h4>
      <p>
        {user.username} {user.password}
      </p>
      <hr />
      <UserContext.Provider  value={user}>
               <N />
      </UserContext.Provider>
    </div>
  );
}

export default M