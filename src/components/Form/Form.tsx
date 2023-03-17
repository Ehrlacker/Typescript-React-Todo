import React from 'react'
import {ChangeEvent} from 'react'
import './Form.css'


type FormProps ={
  value: string,
  clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>)=> void
}


const Form = ({clickHandler, onChangeHandler, value}: FormProps) => {
  return (
    <form className="TodoForm">
        <input className="FormInput"  type="text" onChange={onChangeHandler} value={value} />
        <button className="FormButton" onClick={clickHandler} type="submit">Add todo</button>
        </form>
    
  )
}

export default Form