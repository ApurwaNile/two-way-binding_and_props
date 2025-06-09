
import {useState} from 'react'
import { nanoid } from "nanoid"; // Import nanoid for unique IDs

const Create = (props) => {
const todos = props.todos;
const settodos = props.settodos;

  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

  //   let copytodos = [...todos];
  //   copytodos.push(newtodo);
  //   settodos(copytodos);
  
  settodos([...todos, newtodo]);
    settitle(""); // Clear the input field after submission
    console.log(copytodos);
  };

  return (
    <div>
          <h1>Create task</h1>
      <br />
    
       <form onSubmit={submitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />

        <button type="submit">Create todo</button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default Create