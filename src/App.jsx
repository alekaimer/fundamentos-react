import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragment from './components/basics/Fragment'

export default (props) => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Fragment />
      <WithParameter 
        title="Component passando Props"
        aluno="Maria" 
        nota={9.9}
      />
      <First />
    </div>
  )
}