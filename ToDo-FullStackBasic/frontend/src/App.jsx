import { useState } from 'react'
import axios from 'axios';

import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState([])
  
  const fetchdot = async() =>{
    try{
      const fetchdata = await axios.post("http://localhost:3000/todos")
      console.log("#@#@#@#@#@",fetchdata.data)
      setCount(fetchdata.data)
    }
    catch(e){
      console.log("Error fetching the data",e)
    }
  }

  return (
    <>
      <Createtodo/>
      <Todos todosvalue={count}></Todos>
      <button onClick={fetchdot}>Fetch Data</button>  
    </>
  )
}

export default App
