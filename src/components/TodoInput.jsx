import React, { useState } from "react";
import styles from './TodoInput.module.css';

const TodoInput = ({ addTodo }) => {  /* if we don't write "{/* if we donot write "addTodo = {addTodo}" , it will show error addTodo is not defined*/
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={value} // we uses this , when we click on add button automatically input clears,because we are setting the setValue = "" in line number 20. 
        placeholder="new todo item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        className={styles.btn}
        disabled={!value} //To disable the Add button
        onClick={() => {
          console.log(value);
          addTodo(value); //addTodo provokes with given value.
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
