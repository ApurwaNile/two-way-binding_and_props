import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import Product from "../components/Product"
import Service from "../components/Service"
import Cart from "../components/Cart"
import Servicedetails from "../components/Servicedetails"


const Mainroutes = () => {
  return (
   <Routes>
      <Route  path="/" element ={<Home/>}/>
      <Route  path="/about" element ={<About />}/>
      <Route  path="/service" element ={<Service />}>
      <Route  path="/service/details" element ={<Servicedetails />}/>
      </Route>
      
      <Route  path="/product" element ={<Product />}/>
      <Route  path="/product/cart/:name" element ={<Cart />}/>
    </Routes>
  )
}

export default Mainroutes