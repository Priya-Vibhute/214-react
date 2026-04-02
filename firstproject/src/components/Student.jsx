import React from 'react'

function Student({rollNo,name,marks}) {
  return (
    <div>
      {/* Short circuiting */}
      <h4>Student Details</h4>
      <ul>
        <li>Roll no :{rollNo || <small>Roll no not provided</small>}</li>
        {name && <li>Name : {name}</li>}
        <li>{marks ? `Marks : ${marks}` : "Marks not provided"}</li>
      </ul>
    </div>
  );
}

export default Student