import {NavLink } from "react-router-dom"
const Nav = () => {
  return (
 
    <div  className="flex justify-center p-10 gap-5 bg-gray-700 text-white text-lg  ">
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/service">Service</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300" : ""} to="/product">Product</NavLink>
    </div>
  )
}

export default Nav
