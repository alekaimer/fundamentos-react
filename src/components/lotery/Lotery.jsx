import React from 'react'

export default props => {
  
  function numberGenerator(quantity) {
    const numbers = Array(quantity)
      .fill(0)
      .reduce((nums) => {
        const newNumber = numberGeneratorNotContained(1, 60, nums)
        return [ ...nums, newNumber]
      },[])
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
  
  return (
    <div>
      {numberGenerator(6).join(` - `)}
    </div>
  )
}
