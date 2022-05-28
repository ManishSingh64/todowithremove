import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

const TodoApp = ()=>{
    const [todos, setTodos] = React.useState([]);
    const [removeditems,setRemoveItems] = React.useState([]) 
    const [toggle, setToggle] = React.useState(false)

    const addTodo = (xyz) =>{
        setTodos([...todos,{
            id:uuidv4(),
            value:xyz
        }]) //basically here we are pushing {"id","xyz"} as an object in todos.
    //   console.log(todos) //you can see the see the console also.
    };

    const deleteTodo = (value)=>{
        setTodos(todos.filter((x) => x.value !== value)) 

        setRemoveItems([...removeditems,{
            id:uuidv4(),
            value:value,
            state:true
        }])
    }
    // input
    // listing
    return (
        <div style={{backgroundColor:"teal"}}>
            <h1 style={{textDecoration:"underline"}}>Todo App</h1>
            <TodoInput addTodo = {addTodo} />   {/* if we donot write "addTodo = {addTodo}" , it will show error addTodo is not a function*/}
             <TodoList>
                {todos.map((x)=>( //give parenthesis here.
                    <TodoItem key={x.id} value= {x.value} deleteTodo ={deleteTodo}/>
                ))}
            </TodoList>

            <button onClick={() => setToggle(!toggle)}>{toggle? "Hide Removed Items" : "Show Removed Items"}</button>

            {toggle ? <TodoList>
                {removeditems.map((x)=>( //give parenthesis here.
                    <TodoItem state={x.state} key={x.id} value= {x.value} />
                ))}
            </TodoList> : null}
        </div>
    )
}

export default TodoApp;
