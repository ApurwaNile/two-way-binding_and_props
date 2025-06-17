import { useState } from "react";
// import { nanoid } from "nanoid"; // Import nanoid for unique IDs
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className=" text-white  font-thin h-screen w-screen  bg-zinc-900  flex p-10 ">
      <Create  />
      <hr />
      <Read  />
    </div>
  );
};

export default App;
