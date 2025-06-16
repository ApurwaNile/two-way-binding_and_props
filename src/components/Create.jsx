

import { nanoid } from "nanoid"; 
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";

const Create = (props) => {
    const { register, 
    handleSubmit, 
    reset , 
    formState: { errors }
   } = useForm();
const todos = props.todos;
const settodos = props.settodos;

 
  const submitHandler = (data) => {
    

data.isCompleted = false;
data.id = nanoid();
// console.log(data);
const copytodos = [...todos];
copytodos.push(data);
settodos(copytodos);

toast.success("Todo created successfully")

reset();
  }
  return (
    <div className='w-[60%]     p-10  '>
          <h1 className='text-5xl mb-10 '>Improve Your <span className='text-blue-400'>Productivity</span> <br /> Create tasks</h1>
      <br />

       <form onSubmit={handleSubmit(submitHandler)}>
        <input
        className='border-b w-full text-2xl p-2 outline-0'
         {...register("title", {required: "title cannot be empty"})}
        />
{errors && errors.title && errors.title.message && <small className = "text-red-400">{errors.title.message}</small>}        <br />
        <br />

        <button className="text-xl px-10 py-4 border rounded" type="submit">Create todo</button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default Create