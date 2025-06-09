
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos ;

let rendertodos = todos.map((todo) =>{
return <li key={todo.id}>{todo.title}</li>
  });
  return (
    <div>
        
      <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  )
}

export default Read