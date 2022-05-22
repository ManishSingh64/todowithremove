import React from 'react'

const TodoList = ({children}) => {
  return (
    <div>
      <h3>Here is your TODO List</h3>
       <ul>
         {children}
       </ul>
    </div>
  )
}

export default TodoList;