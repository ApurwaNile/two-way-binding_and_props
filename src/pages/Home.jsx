import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
const getproduct = async () =>{
try {
  const {data} = await axios.get("products")
  console.log(data);
  
} catch (error) {
  console.log(error);
  
}
}
useEffect (() =>{
  getproduct();
  console.log("home mounted")

  return () =>{
    console.log("home unmounted");
  }
})
  return (
  <div>
    <h1>Home</h1>
    <button onClick={getproduct}>Get Products</button>
  </div>
)
};

export default Home;
