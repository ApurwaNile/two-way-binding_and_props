import { useContext } from "react";
import {recipeContext} from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
const Recipes = () => {
  const [data] = useContext(recipeContext);

  const renderRecipes = (data || []).map((recipe) => (
    <RecipeCard  key={recipe.id} recipe={recipe}/>
  ));
  return <div className="flex flex-wrap">{renderRecipes}</div>;
};

export default Recipes;
