
import {useState} from 'react'
import { nanoid } from "nanoid"; 

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
    <div className='w-[60%]     p-10  '>
          <h1 className='text-5xl mb-10 '>Improve Your <span className='text-blue-400'>Productivity</span> <br /> Create tasks</h1>
      <br />
    
       <form onSubmit={submitHandler}>
        <input
        className='border-b w-full text-2xl p-2 outline-0'
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />

        <button className="text-xl px-10 py-4 border rounded" type="submit">Create todo</button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default Create