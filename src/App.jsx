import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "do work", isCompleted: false },
  ]);
  const [title, settitle] = useState("");
  console.log(title);

  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState("Male")
  const [city, setcity] = useState("mumbai")


  return (
    <div>
      <h1>Create task</h1>
      <form>
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
        <input
        checked={completed}
          onChange={(e) => {
            setcompleted(e.target.checked);
          }}
          type="checkbox"
        />
        Completed
        <br />
        <br />
        <button>Create todo</button>
        <br />
        <br />
        <input 
        value = 'Male'
        onChange={ (e) => {setgender(e.target.value)}}
        checked = {gender === 'Male' ? true : false}
        type="radio"/>Male
        <input 
        value = 'Female'
        onChange={ (e) => {setgender(e.target.value)}}
        checked = {gender === 'Female' ? true : false}
        type="radio"/>Female
  <br />
        <br />
        <label>City</label>
        <br />
        <br />
        
          <select value={city} onChange={(e) => {setcity(e.target.value)}} >
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="banglore">Banglore</option>
            <option value="chennai">Chennai</option>
          </select>
      </form>
    </div>
  );
};

export default App;
