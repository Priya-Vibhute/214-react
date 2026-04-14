import React from 'react'
import D from './D'

function C({data}) {
  return (
    <div>
        <h4>C component</h4>
        <p>{data}</p>
        <hr/>
        <D data={data}/>
    </div>
  )
}

export default C