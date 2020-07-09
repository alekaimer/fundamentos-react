
import React from 'react'

export default props => {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Idade: {props.idade}</div>
      <div>Nerd: {props.nerd ? `<${String(props.nerd)} />` : `Não`}</div>
    </div>
  )
}