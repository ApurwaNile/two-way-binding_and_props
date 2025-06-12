import { useState } from "react";
// import { nanoid } from "nanoid"; // Import nanoid for unique IDs
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "do work", isCompleted: false },
  ]);



  return (
    <div className=" text-white  font-thin h-screen w-screen  bg-zinc-900  flex p-10 ">
      
     <Create todos={todos} settodos={settodos} />
      <hr />
     <Read todos={todos} settodos={settodos} /> 
      
    </div>
  );
};

export default App;
