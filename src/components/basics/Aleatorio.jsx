import React from 'react'

export default (props) => {

  const { min, max } = props
  /*
  Mesma coisa que 
  const min = props.minNumber
  const max = props.maxNumber
  */

  function getRandomInt(min, max) {
    return parseInt(Math.random() * ((max + 1) - min)) + min
  }

  return (
    <>
      <h2>Número aleatório entre {min} e {max}</h2>
      <p>
        Foi sorteado o número {getRandomInt(min, max)}.
      </p>
    </>
  )
}