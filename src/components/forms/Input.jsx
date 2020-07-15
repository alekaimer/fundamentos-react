
import React, { useState } from 'react'

export default props => {

  const [value, setValue] = useState(`initial`)

  return (
    <div>
      <input value={value}/>
    </div>
  )
}