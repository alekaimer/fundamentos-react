
import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

export default props => {

  let [name, setName] = useState(`?`)
  let [age, setAge] = useState(0)
  let [nerd, setNerd] = useState(false)

  function whenClick(name, age, nerd) {
    // age = parseInt(Math.random(20) * 5)
    // nerd = true
    setName(name)
    setAge(age)
    setNerd(nerd)
    console.log(name, age, nerd)
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span> <strong>{age}</strong> </span>
        <span>{String(nerd)}</span>
      </div>
      <IndirectSon propWhenClick={whenClick}></IndirectSon>
    </div>
  )
}