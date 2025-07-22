import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeCard = (props) => {
  const { id, chef, title, desc, image, ing, ingredients, inst, instructions } = props.recipe;

  const ingredientsText = ing || (Array.isArray(ingredients) ? ingredients.join(", ") : "");
  const instructionsText = inst || (Array.isArray(instructions) ? instructions.join(", ") : "");

  return (
    <Link
      to={`/recipes/details/${id}`}
      className=" mr-8 mb-3 block  w-[23vw] overflow-hidden rounded "
    >
      <img className="w-full h-[40vh] object-cover" src={image} alt="food image" />
      <h1 className="mt-2 font-black px-2">{title}</h1>
      <small className="text-red-400 px-2 text-xl">{chef}</small>
      <p className="px-2 pb-3">
        {(desc || "").slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
      <div className="px-2">
        <h2 className="font-bold">Ingredients:</h2>
        <p>{(ingredientsText || "").slice(0, 100)}...</p>
        <h2 className="font-bold">Instructions:</h2>
        <p>{(instructionsText || "").slice(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
