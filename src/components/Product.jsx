import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const handleClick = (name) => {
        navigate(`/product/cart/${name}`);
    };
  return (
    <div className="p-10">
        <h1 className="text-5xl  font-thin  mb-5">Products</h1>
        <div>
            <h2 className="text-3xl font-light mb-3">product 1</h2>
            <button onClick={() => handleClick("product1")} className="px-5 py-2 bg-blue-400 text-white rounded">Add to Cart</button>
        </div>
        <div>
            <h2 className="text-3xl font-light mb-3">product 2</h2>
            <button onClick={() => handleClick("product2")} className="px-5 py-2 bg-blue-400 text-white rounded">Add to Cart</button>
        </div>
        <div>
            <h2 className="text-3xl font-light mb-3">product 3</h2>
            <button onClick={() => handleClick("product3")} className="px-5 py-2 bg-blue-400 text-white rounded">Add to Cart</button>
        </div>
    </div>
  )
}

export default Product