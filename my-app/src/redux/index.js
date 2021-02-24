




import redux, {createStore} from "redux"

export function addTodo(data) {
    return {
        type: "ADD-TODO",
        payload : data
    }
}

export function toggleDone  () {

    return {
        type : "TOGGLE-DONE",
       
    }
}

export function filterDone(data) {
    return {
        type : "FILTER-DONE" ,
        payload : data
    }
}

export  const filterUndone = (data) => {
    return {
        type : 'FILTER-UNDONE' ,
        payload : data
    }
}

export const edit = () => {
   return {
       type : "EDIT-NAME",
      
   }
     
}



function reducer(todoList = [], action) {
    switch(action.type) {
        case "ADD-TODO":
            return [...todoList, action.payload ]
       case "TOGGLE-DONE" :
       return    [...todoList]

     case  "FILTER-DONE" :
     
     if (todoList.length >= 1) return [...action.payload] 

  case "FILTER-UNDONE" :
   if (action.payload.length >= 1 ) { return [...action.payload]} else {return [...todoList]}

  case "EDIT-NAME" :
   return [...todoList]


        default:
            return todoList
    }
}

const store = createStore(reducer)

export default store






