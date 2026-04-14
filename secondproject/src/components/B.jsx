import React from 'react'
import C from './C'

function B({data}) {
  return (
    <div>
        <h4>B component</h4>
        <p>{data}</p>
        <hr/>
        <C data={data}/>
    </div>
  )
}

export default B