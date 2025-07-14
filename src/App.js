import React, { useState } from 'react';
import './App.css';

export default function App() {
    let [todos, settodos] = useState([]);

  let savetodolist=(event)=>{

    let toname=event.target.toname.value;
    if(!todos.includes(toname)){
      
      let finaltodo=[...todos, toname];
      settodos(finaltodo);

      
    }else{
      alert("This todo already exists!");
    }
    event.preventDefault();
   
  }
  let  list=todos.map((value, index) => {
    return (
      <TodoList value={value} key={index} index={index}
    todos={todos}
    settodos={settodos}
      />
    )
  });


  return (
    <div className="App"> 

      <h1>📝 To-Do List</h1>

      <form onSubmit={savetodolist}>
        <input type="text"  name="toname" placeholder="Enter your todo" />
        <button type="submit" >Save</button>
      </form>
      <div className="outerdiv">
        <ul>
          {list}
        </ul>
        </div>
         
    </div>
  );
}
function TodoList({ value, index, todos, settodos }) {
  let deleteTodo = () => {
    let newtodos = todos.filter((todo, i) => i!== index)
    settodos(newtodos)

      
  }
  let[val,setval]=useState(false);
  let setvalue=()=>{
    setval(!val);

  }
  return (
    <li  className={(val)?"completed":" "}onClick= { setvalue}>
           {index +1} {value} <span onClick={deleteTodo}>&times;</span>
    </li>
  )
}
