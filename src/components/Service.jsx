import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  const serviceHandler = () => {
    navigate("/service/details");
  };
  return (
    <div className="p-10 ">
      <h1 className="font-thin text-3xl text-white">Our Services</h1>
      <button onClick={serviceHandler} className="mt-5 px-5 py-2 bg-blue-400 text-white rounded mb-5">Learn More</button>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Service