import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

const TodoApp = ()=>{
    const [todos, setTodos] = React.useState([]);

    const addTodo = (xyz) =>{
        setTodos([...todos,{
            id:uuidv4(),
            value:xyz
        }]) //basically here we are pushing {"id","xyz"} as an object in todos.
    //   console.log(todos) //you can see the see the console also.
    };

    const deleteTodo = (value)=>{
        setTodos(todos.filter((x) => x.value !== value)) 
    }
    // input
    // listing
    return (
        <div>
            TodoApp
            <TodoInput addTodo = {addTodo} />   {/* if we donot write "addTodo = {addTodo}" , it will show error addTodo is not a function*/}
             <TodoList>
                {todos.map((x)=>(
                    <TodoItem key={x.id} value= {x.value} deleteTodo ={deleteTodo}/>
                ))}
            </TodoList>
        </div>
    )
}

export default TodoApp;
