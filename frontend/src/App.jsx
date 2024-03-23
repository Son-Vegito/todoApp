import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { ToDos } from './components/ToDos'
function App() {
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todo")
  .then(async function(res){
    const json=await res.json();
    setTodos(json);
  })

  return (
    <div>
      <CreateToDo/>
      <ToDos todos={todos}></ToDos>
    </div>
  )
}

export default App
