import React from 'react'
import styles from './TodoList.module.css'

const TodoList = ({children}) => {
  return (
    <div className={styles.ul}>
      <h3>Here is your TODO List</h3>
       <ul>
         {children}
       </ul>
    </div>
  )
}

export default TodoList;