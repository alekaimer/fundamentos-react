
import React from 'react'
import DirectSon from './DirectSon'

export default props => {
  return (
    <div>
      <DirectSon nome="Anne" idade={17} nerd={false}></DirectSon>
      <DirectSon nome="Jeff" idade={37} nerd={true}></DirectSon>
    </div>
  )
}