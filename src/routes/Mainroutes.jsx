import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";

const Mainroutes = () => {
  return (
    <Routes>
<Route path = "/" element ={< Home />}/>
<Route path = "/about" element ={< About/>}/>
<Route path = "/recipes" element ={< Recipes/>}/>
<Route path = "/create-recipes" element ={< Create/>}/>

        </Routes>
  );
};

export default Mainroutes;
