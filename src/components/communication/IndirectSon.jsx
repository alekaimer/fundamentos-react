
import React from 'react'

export default props => {

  // const callBackFunction = props.propWhenClick
  const ageGenerator = () => parseInt(Math.random() * (100 - 21)) + 21

  return (
    <div>
      Son component: 
      {/* <button onClick={_ => { callBackFunction('John', 35, true) }}>Send information!</button> */}
      <button onClick={function(){props.propWhenClick('John', ageGenerator(), true)}}>Send information!</button>
    </div>
  )
}