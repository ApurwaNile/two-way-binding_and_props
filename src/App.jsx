import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Product from "./components/Product";
import Nav from "./components/Nav";


const App = () => {
  return <div className="w-screen h-screen bg-gray-800 text-white">
    <Nav />
    <Routes>
      <Route  path="/" element ={<Home/>}/>
      <Route  path="/about" element ={<About/>}/>
      <Route  path="/service" element ={<Service/>}/>
      <Route  path="/product" element ={<Product/>}/>
    </Routes>
  </div>;
};

export default App;
