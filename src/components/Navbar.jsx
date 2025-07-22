import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div  className="flex justify-center gap-x-20 items-center  font-thin text-xl mb-10 p-4 text-white">
        <NavLink className={(e)=> e.isActive ? "text-red-900" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to="/create-recipes">Create</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-300" : ""} to="/fav">Favourites</NavLink>
    </div>
  )
}

export default Navbar