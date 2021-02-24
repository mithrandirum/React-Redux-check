import { toggleDone } from './redux/index'
import {useSelector, useDispatch}  from 'react-redux'
import  "./App.css"
import {edit} from './redux/index'




 const TodoItem = ({name , id , done}) => {
     const todoList = useSelector( state => state)

 const dispatch = useDispatch()   

const onchangeHandler = () => {
  dispatch(toggleDone(todoList.map( el => { if ( el.id === id) if (el.done === false) {
          
    return  el.done = true }else { return  el.done = false
   }
 })))
}


const handleEdit = () => {
    var newName = prompt("enter desired change")
    dispatch(edit(  todoList.map( el =>  el.id === id ?    el.name = newName: undefined)))
}

    return (
        <div className = "morad">
            <p className = {done ? " line" : undefined}> {name}</p>
            <input type = "checkbox"
            checked = {done}
            onChange = {onchangeHandler}
            />
            <button onClick = {handleEdit}>edit</button>
        </div>
    )
}

export default TodoItem
