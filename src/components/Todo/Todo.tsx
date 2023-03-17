import './Todo.css'


//Todo will have a name and a delete button

export type TodoItem={
    name: string,
    id: string,
    deleteTodo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void;
  }

const Todo = ({id, name, deleteTodo}: TodoItem) => {
  return (
    <div className="Todo" id={id}>
        <h1 className="Todo-h1">{name}</h1>
        <button className="Todo-button" onClick={deleteTodo} type="submit">Delete</button>
    </div>
  )
}

export default Todo