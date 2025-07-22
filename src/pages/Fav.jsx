import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
   const favroite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderRecipes = (favroite || []).map((recipe) => (
    <RecipeCard  key={recipe.id} recipe={recipe}/>
  ));
  return <div className="flex flex-wrap">{renderRecipes}</div>;
};

export default Fav;
