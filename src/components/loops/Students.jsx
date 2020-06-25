import React from 'react'
import students from '../../data/students'

export default props => {
  const items = students.map((student) => {
    return (
      <li key={student.id}> {/* key passado com ID gera uma identiricação única que ajuda ao React encontrar mais rapidamente eventuais alterações */}
        {student.id}: {student.name} -> {student.nota}
      </li>
    )
  },)
  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  )
}