
import {useSelector, useDispatch}  from 'react-redux'
import {useState} from 'react'
import './App.css'
import { addTodo } from './redux/index';
import TodoItem from './TodoItem'
import { filterDone, filterUndone} from  './redux/index'






function App() {

const todoList = useSelector(state => state)
const dispatch = useDispatch()
const [input , steInput] = useState('')
   
console.log(todoList)
const obj = {
  name : input, 
  id : Date.now(),
  done: false
}

const handlefate = () => {
  dispatch(addTodo(obj))
  
}

const handleOnchage = (e) => {
   steInput(e.target.value)
}


const filterHnadler = () => {

  var filtered = todoList.filter( el => el.done === true)
  
 dispatch(filterDone(filtered))
 console.log(filtered)
}


const filerInComplete = () => {

  var filtered = todoList.filter( el => el.done === false)
  
  dispatch(filterUndone(filtered))
  console.log(filtered)
}



  return (
    <div className="App">
      <input type = "text" 
      onChange = {(e) => handleOnchage(e)} 
      value = {input}
      placeholder = "enter todo..."

      />
       <button onClick = {handlefate} > ADD </button>
      <button onClick = {filterHnadler}>complete</button>
     <button onClick = {filerInComplete}> incomplete</button>
     {todoList.map( todo => 
          < TodoItem  name = { todo.name }
         id = {todo.id} 
         done = {todo.done }
         key = {todo.id }/>
     )}
    </div>

  );
}

export default App;
