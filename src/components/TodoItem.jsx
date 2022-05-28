import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ state, value, deleteTodo }) => {
  const [boolean, setBoolean] = useState(state);
  return (
    <div>
      {boolean ? (
        <li className={styles.li}>
          <input type="checkbox" defaultChecked />
          <p style={{ textDecoration: "line-through" }} className={styles.para}>
            {value}
          </p>
          <button className={styles.btn} onClick={() => deleteTodo(value)}>
            Remove
          </button>
        </li>
      ) : (
        <li className={styles.li}>
          <input type="checkbox" />
          {value}
          <button className={styles.btn} onClick={() => deleteTodo(value)}>
            Remove
          </button>
        </li>
      )}
    </div>
  );
};

export default TodoItem;
