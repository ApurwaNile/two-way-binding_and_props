import { useNavigate, useParams } from "react-router-dom";


const Cart = () => {
    const navigate = useNavigate();
    const params = useParams();
    
  return (
    <div>
        <h1 className="text-5xl  font-thin p-10">{params.name}</h1>
        <p className="text-lg p-10">Lorem ipsum dolor sit amet consectetur.</p>
         <button  onClick={()=>navigate(-1)} className=" m-5 px-5 py-2 bg-blue-400 text-white rounded">Back to Products</button>
    </div>
  )
}

export default Cart
