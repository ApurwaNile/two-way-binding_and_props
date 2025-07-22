import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";

const SingleRecipe = () => {
  const [data, setData] = useContext(recipeContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: recipe?.image,
      title: recipe?.title,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ing:
        recipe?.ing ||
        (recipe.ingredients ? recipe.ingredients.join(", ") : ""),
      inst:
        recipe?.inst ||
        (recipe.instructions ? recipe.instructions.join(", ") : ""),
    },
  });
  const UpdateHandler = (recipe) => {
    const Index = data.findIndex((recipe) => recipe.id == params.id);
    const copyData = [...data];
    copyData[Index] = { ...copyData[Index], ...recipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe updated successfully!");
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((r) => r.id != params.id);
    setData(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };

  if (!data) return <div>Loading...</div>;

  if (!recipe) return <div>Recipe not found.</div>;



const [favroite, setfavroite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  const favHandler = () => {
    let copyfav = [...favroite];
    copyfav.push(recipe);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Recipe added to favorites!");
    setfavroite(copyfav);
  };
  const UnfavHandler = () => {
    const filteredFav = favroite.filter((f) => f.id != recipe.id);
    setfavroite(filteredFav);
    localStorage.setItem("fav", JSON.stringify(filteredFav));
    toast.success("Recipe removed from favorites!");
  };
useEffect(()=>{
  console.log("SingleRecipt.jsx mounted");
  return() => {
    console.log("SingleRecipt.jsx unmounted");
  }
},[favroite])
  return (
    <div className="w-full flex">
      <div className=" relative left w-1/2 p-10">
        {favroite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnfavHandler}
            className="right-[5%]  absolute ri-heart-fill text-red-500 text-4xl"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className=" right-[4%] absolute ri-heart-line text-red-500 text-4xl mr-2"
          ></i>
        )}

        <h1 className="text-5xl mb-3 font-black">{recipe.title}</h1>
        {recipe.image ? (
          <img className="h-60 w-60" src={recipe.image} alt="" />
        ) : null}
      </div>
      <div className="right w-1/2 p-2">
        <form onSubmit={handleSubmit(UpdateHandler)}>
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

          <div className="flex  gap-4">
            <button className="block bg-gray-700 px-4 py-2 font-thin text-white-400 mt-4 rounded">
              Update Recipe
            </button>
            <button
              onClick={DeleteHandler}
              className="block bg-red-800 px-4 py-2 font-thin text-white-400 mt-4 rounded"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
