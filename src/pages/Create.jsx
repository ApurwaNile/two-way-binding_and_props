import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
// import recipeContext from "../context/RecipeContext";
import {recipeContext} from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [ data, setData ] = useContext(recipeContext);
  const navigate = useNavigate();
  const { register, handleSubmit ,reset} = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
     recipe.image = recipe.images;
    //  delete recipe.images;
  // setData([...data, recipe]);
  const copydata = [...data];
  copydata.push(recipe);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
  toast.success("Recipe added successfully!");
    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className=" block outline-0  border-b p-2 font-thin text-white text-xl  "
        {...register("image")}
        type="url"
        placeholder="Image URL"
      />
      <small className="block text-red-500   font-thin">
        Upload an image
      </small>

      <input
        className=" block outline-0  border-b p-2 font-thin text-white text-xl  "
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
      />
      <small className="block text-red-500   font-thin">
        Error- please confirm the title
      </small>
      <input
        className=" block outline-0  border-b p-2 font-thin text-white text-xl  "
        {...register("chef")}
        type="text"
        placeholder="Recipe Chef"
      />
      <small className="block text-red-500   font-thin">
        Error- please confirm the title
      </small>
      <textarea
        className="block outline-0  border-b p-2 font-thin text-white text-xl  w-full"
        {...register("desc")}
        placeholder="//start from here"
      />
      <small className="block text-red-500   font-thin">
        Error- please confirm the description
      </small>
      <textarea
        className="block outline-0  border-b p-2 font-thin text-white text-xl  w-full"
        {...register("ing")}
        placeholder="//write the ingredients separated by commas"
      />
      <small className="block text-red-500   font-thin">
        Error- please confirm the ingredients
      </small>
      <textarea
        className="block outline-0  border-b p-2 font-thin text-white text-xl  w-full"
        {...register("inst")}
        placeholder="//write the instructions separated by commas"
      />
      <small className="block text-red-500   font-thin">
        Error- please confirm the instructions
      </small>
      <select
        className="block outline-0  border-b p-2 font-thin text-white text-xl   bg-gray-800"
        {...register("category")}
      >
        <option value="">Select a category</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="super">Super</option>

        <option value="dinner">Dinner</option>
      </select>
      <small className="block text-red-500   font-thin">
        Error- please confirm the category
      </small>

      <button className="block bg-gray-700 px-4 py-2 font-thin text-white-400 mt-4 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
