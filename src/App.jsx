import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"


const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800  py-10 px-[10%] text-white font-thin">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App