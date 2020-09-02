import './Mega.css'
import React, { useState } from 'react'

export default props => {

  function numberGenerator(quantity) {
    const numbers = Array(quantity)
      .fill(0)
      .reduce((nums) => {
        const newNumber = numberGeneratorNotContained(1, 60, nums)
        return [...nums, newNumber]
      }, [])
      .sort((a, b) => a - b)
    return numbers
  }
  // console.log(numberGenerator(3))

  function numberGeneratorNotContained(min = 1, max = 3, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(random) ?
      numberGeneratorNotContained(min, max, array) :
      random
  }
  // console.log(numberGeneratorNotContained(1, 60, [0, 0, 0, 0, 0, 0]))

  const [qtt, setQtt] = useState(props.qtt || 6)
  const initialNumbers = numberGenerator(qtt)
  const [numbers, setNumbers] = useState(initialNumbers)


  return (
    <div className='Mega'>
      <h2>Sua sorte é hoje!</h2>
      {/* {numberGenerator(6).join(` - `)} */}
      <h3><strong>{numbers.join(' - ')}</strong></h3>
      <div>
        <label htmlFor="qttNumbers">Quantidade de Números</label>
        <input type="number" value={qtt} max={60}
          onChange={e => setQtt(+e.target.value)}
        />
      </div>
      <button onClick={_ => {
        setNumbers(numberGenerator(qtt))
      }}
      >Gerar números</button>
    </div>
  )
}
