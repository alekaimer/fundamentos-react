
import React, { useState } from 'react'

export default props => {
  const [value, setValue] = useState(`initial`)
  function changeState(event){
    setValue(event.target.value)
    console.log(event.target.value)
  }
  
  return (
    <div>
      <h2>{value}</h2>
      <input value={value} onChange={changeState}/>
    </div>
  )
}