
import {useState} from 'react'
import Form from './components/Form/Form'
// import {ChangeEvent} from 'react'
import { v4 as uuidV4 } from 'uuid';
import Todo from './components/Todo/Todo'
import "./App.css"
import Header from './components/Header/Header'


type todoProperties ={
title: string, 
id: string
}

const App = () => {
const [value, setValue] =useState('')  
const [todos, setClick] = useState<todoProperties[]>([])


const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = e.target.value
  setValue(newValue)
}


const handleFormClick =(e: React.MouseEvent<HTMLButtonElement>)=>{ 
  e.preventDefault()
  console.log(todos)
  
const newTodo: todoProperties = {title: value, id:uuidV4()}
setClick([...todos, newTodo])
setValue("")
}


const deleteTodo =(item:todoProperties)=>{
  console.log("iwqrfb")
  setClick((prevValue)=>{
    return prevValue.filter((todo)=>{
      return item.id !== todo.id
    })
  })
}

  return (
   <div className="App">
     <Header />
     <Form
     onChangeHandler={handleFormChange}
     clickHandler={handleFormClick}
     value= {value}
     />
      <div className="TodoContainer">
      {todos.map((item)=>{
         return(
           <Todo
           key={item.id}
           id={item.id} 
           name={item.title}
           deleteTodo={()=>deleteTodo(item)}
           />
           
         )
       })}
     </div>
   </div>
  );
}

export default App;
