import React, { useState } from 'react';
export const Create = (props) => {
  console.log(props);

  const [fullname, setfullname] = useState("");
  

  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, Age };
    console.log(newuser);
  };

  const [Age, setAge] = useState(18);
  

  return (
    <div>
      <h1>Register Users</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) =>setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="First Name"
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          type="number"
          placeholder="Age"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Create;
