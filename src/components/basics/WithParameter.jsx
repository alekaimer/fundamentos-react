import React from 'react'

export default function WithParameter(props){
  console.log(props)
  const status = props.nota >= 6 ? `Aprovado` : `Reprovado` ;
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <span> {props.nota}</span> e foi  
        <i> {status}</i>
      </p>
    </div>
  )
}