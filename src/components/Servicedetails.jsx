import { useNavigate } from "react-router-dom";



const Servicedetails = () => {
    const navigate = useNavigate();
    
    
  return (
    <div>
        <h1 className="text-5xl  font-thin p-10">More services</h1>
        <p className="text-lg p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio, sapiente ad alias commodi, repellendus tenetur perferendis dicta dignissimos aliquid autem? Dolor pariatur officia eum odit laudantium id repudiandae numquam?
        Sunt eaque obcaecati incidunt repudiandae voluptas, recusandae tenetur ex repellat nihil neque est dolores adipisci rerum placeat consequatur molestias fuga voluptate commodi? Porro aut culpa atque quo accusantium, quas adipisci!
        Aliquid ab dolorem non temporibus consequuntur, saepe commodi fugit necessitatibus, tempore quisquam quidem suscipit! Nihil dolore optio suscipit dolorum repudiandae voluptatem consectetur officia cum fugiat iste? Quia voluptas suscipit nobis?</p>
         <button  onClick={()=>navigate(-1)} className=" m-5 px-5 py-2 bg-blue-400 text-white rounded">Back to Services</button>
    </div>
  )
}

export default Servicedetails;
