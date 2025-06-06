import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "do work", isCompleted: false },
  ]);
  const [title, settitle] = useState("");
  console.log(title);
const sumitHandler = (e) => {
  e.preventDefault();
  if (title.trim() === "") {
    alert("Please enter a title");
    return;
  }

  return (
    <div>
      <h1>Create task</h1>
      <form onSubmit={(sumitHandler)}>
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
    
        <button>Create todo</button>
        <br />
        <br />
        
      </form>
    </div>
  );
};
}
export default App;
