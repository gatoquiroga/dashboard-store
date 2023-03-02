
import { RiUserLine , RiAddLine, RiPieChartLine ,RiMenu3Fill,RiCloseLine, RiArrowDownSLine} from "react-icons/ri";
import { useState } from "react";
//componentes
import Sidebar from "./components/shared/Sidebar"
import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Card from "./components/shared/Card";
function App() {

  const [showMenu, setshowMenu] = useState(false)
  const [showOrder, setshowOrder] = useState(false)

  const toggleMenu = ()=> {
    setshowMenu(!showMenu)
    setshowOrder(false)
  }
  const toggleOrders = ()=> {
    setshowOrder(!showOrder)
    setshowMenu(false)
  }
 
  return (
    <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu}/>
    <Carrito showOrder={showOrder} setshowOrder={setshowOrder}/>
    {/*menu movil */}
    <nav className="bg-[#1f1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl"> 
     <button className="p-2">
       <RiUserLine/>
     </button>
     <button className="p-2">
       <RiAddLine />
     </button>
     <button onClick={toggleOrders} className="p-2">
       <RiPieChartLine/>
     </button>
     <button onClick={toggleMenu} className="text-white  p-2">
       {showMenu ? <RiCloseLine  /> : <RiMenu3Fill />}
     </button>
    </nav>
    <main className="lg:pl-32  lg:pr-96  pb-20">
      <div className=" md:p-8 p-4">
        {/*header */}
       <Header/>
        {/* Titulo */}
        <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Elegir Plato</h2>
            <button className="flex items-center text-gray-300 gap-4 bg-[#1f1D2B] py-2 px-4 rounded-lg"><RiArrowDownSLine/> Cenar en</button>
          </div>
          {/* contenido */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <Card img="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/2018/04/Soup-PNG-Pic.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Photo.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Free-Download.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Picture.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            <Card img="https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Download-Image.png" description="Pechuga gill , con ensalada de zanahorias asadas, rucula y comino" price="2.600" inventory="20" />
            
            
          </div>
      </div>
    
    </main>
    </div>
  )
}

export default App
