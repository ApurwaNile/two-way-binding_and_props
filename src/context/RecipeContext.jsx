import { createContext, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
    const [data, setData] = useState([])
    console.log("RecipeContext", data);
  return (
    <recipeContext.Provider value={[data, setData]  }>
      {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext