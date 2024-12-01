import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todo,setTodo]=useState([{task:"sample state",id:uuidv4()}]);
    let [newtodo,setNewtodo]=useState("");
    let addTodo=(event)=>{
        setNewtodo(event.target.value);
    }
    let addingTodo=()=>{
        setTodo([...todo,{task:newtodo,id:uuidv4()}]);
        setNewtodo("");
    }
    let deleteButton=(id)=>{
        setTodo(todo.filter((todos)=>todos.id!=id));
    }

    let updateAllToUpper=()=>{
        setTodo((preVal)=>preVal.map((todos)=>{
            return{
                ...todos,
                task:todos.task.toUpperCase(),
            }
        }))
    }
    let updateOne=(id)=>{
        setTodo((preVal)=>preVal.map((todos)=>{
            if(todos.id==id){
                return{
                    ...todos,
                    task:todos.task.toUpperCase(),
                }
            }else{
                return todos;
            }
        }))
    }
    return(
        <div>
            <input placeholder="type a task here" value={newtodo} onChange={addTodo}/><br /><br />
            <button onClick={addingTodo}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            <h4>TodoList</h4>
            <ul>
               {todo.map((todos)=>(<li key={todos.id}>
                <span>{todos.task}</span>
                &nbsp; &nbsp;
                <button onClick={()=>deleteButton(todos.id)}>delete</button>&nbsp; &nbsp;
                <button onClick={()=>updateOne(todos.id)}>Update One</button><br /><br />
                </li>))}

            </ul>
            <button onClick={updateAllToUpper}>Update All</button>
        </div>
    )
}