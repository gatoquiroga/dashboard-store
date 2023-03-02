import React from 'react'
import { RiCloseLine, RiDeleteBin6Line} from "react-icons/ri";

const Card = (props) => {
    const {showOrder,setshowOrder}=props;
  return (
    
          <div className={`lg:pb-6  fixed   top-0 bg-[#1f1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${ showOrder ?  "right-0":"-right-full"} `}>
      /*{/* orders */}
        <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine onClick={()=> setshowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
        <h1 className="text-2xl my-2 "> Orden #142345</h1>
        {/*pestañas */}

        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Cenar en
          </button>
          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Ir
          </button>
          <button className=" text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/* Cards producto */}
        <div>
          <div className="grid grid-cols-6  mb-4 p-4">
           <h5 className=" col-span-4">Item</h5>
           <h5>ctd</h5>
           <h5>Precio</h5>
          </div>
          {/*Productos */}
          <div className=" h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {/*Producto */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
        <div className=" grid grid-cols-6  mb-4 ">
          {/*Descripcion del producto  */}
          <div className=" col-span-4 flex  items-center gap-2 ">
            <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" alt="comida" className="w-10 h-10 object-cover"/>
            <div>
            <h5 className="text-sm">Pechuga gill , con ensalada de zanahorias asadas, rucula y comino</h5>
            <p className="text-xs text-gray-500"> $2500</p>
            </div>
          </div>
          {/*Qty */}
          <div>
            <span>2</span>
          </div>
          {/*Precio */}
          <div>
            <span>$3500</span>
          </div>
        </div>
        {/* Nota */}
        <div className="grid grid-cols-6 items-center">
        <form className= " col-span-5">
         <input placeholder="Agragar nota.." className="bg-[#1f1D2B] py-1 p-2 px-4 rounded-lg  outline-none" type="text"></input>

        </form>
        <div >
          <button className="border border-red-500 p-2 rounded-lg" > <RiDeleteBin6Line className="text-red-500"/>       </button>
        </div>

        </div>
        </div>
        {/*Producto */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
        <div className=" grid grid-cols-6  mb-4 ">
          {/*Descripcion del producto  */}
          <div className=" col-span-4 flex  items-center gap-2 ">
            <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" alt="comida" className="w-10 h-10 object-cover"/>
            <div>
            <h5 className="text-sm">Pechuga gill , con ensalada de zanahorias asadas, rucula y comino</h5>
            <p className="text-xs text-gray-500"> $2500</p>
            </div>
          </div>
          {/*Qty */}
          <div>
            <span>2</span>
          </div>
          {/*Precio */}
          <div>
            <span>$3500</span>
          </div>
        </div>
        {/* Nota */}
        <div className="grid grid-cols-6 items-center">
        <form className= " col-span-5">
         <input placeholder="Agragar nota.." className="bg-[#1f1D2B] py-1 p-2 px-4 rounded-lg  outline-none" type="text"></input>

        </form>
        <div >
          <button className="border border-red-500 p-2 rounded-lg" > <RiDeleteBin6Line className="text-red-500"/>       </button>
        </div>

        </div>
        </div>
        {/*Producto */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
        <div className=" grid grid-cols-6  mb-4 ">
          {/*Descripcion del producto  */}
          <div className=" col-span-4 flex  items-center gap-2 ">
            <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" alt="comida" className="w-10 h-10 object-cover"/>
            <div>
            <h5 className="text-sm">Pechuga gill , con ensalada de zanahorias asadas, rucula y comino</h5>
            <p className="text-xs text-gray-500"> $2500</p>
            </div>
          </div>
          {/*Qty */}
          <div>
            <span>2</span>
          </div>
          {/*Precio */}
          <div>
            <span>$3500</span>
          </div>
        </div>
        {/* Nota */}
        <div className="grid grid-cols-6 items-center">
        <form className= " col-span-5">
         <input placeholder="Agragar nota.." className="bg-[#1f1D2B] py-1 p-2 px-4 rounded-lg  outline-none" type="text"></input>

        </form>
        <div >
          <button className="border border-red-500 p-2 rounded-lg" > <RiDeleteBin6Line className="text-red-500"/>       </button>
        </div>

        </div>
        </div>
        {/*Producto */}
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
        <div className=" grid grid-cols-6  mb-4 ">
          {/*Descripcion del producto  */}
          <div className=" col-span-4 flex  items-center gap-2 ">
            <img src="https://www.pngall.com/wp-content/uploads/8/Dish-PNG.png" alt="comida" className="w-10 h-10 object-cover"/>
            <div>
            <h5 className="text-sm">Pechuga gill , con ensalada de zanahorias asadas, rucula y comino</h5>
            <p className="text-xs text-gray-500"> $2500</p>
            </div>
          </div>
          {/*Qty */}
          <div>
            <span>2</span>
          </div>
          {/*Precio */}
          <div>
            <span>$3500</span>
          </div>
        </div>
        {/* Nota */}
        <div className="grid grid-cols-6 items-center">
        <form className= " col-span-5">
         <input placeholder="Agragar nota.." className="bg-[#1f1D2B] py-1 p-2 px-4 rounded-lg  outline-none" type="text"></input>

        </form>
        <div >
          <button className="border border-red-500 p-2 rounded-lg " > <RiDeleteBin6Line className="text-red-500"/>       </button>
        </div>

        </div>
        </div>

          </div>
        
        
       
        </div>
         {/*submit patment */}
         <div className="bg-[#262837] w-full absolute bottom-0 left-0 p-4">
             
             <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Descuento</span>
              <span>$0</span>
             </div>
             <div className="flex items-center justify-between mb-6">
              <span className=" text-gray-400">Subtotal</span>
              <span>$3500</span>
             </div>
             <div className="">
              <button className="bg-[#ec7c6a] rounded-lg w-full py-2 px-4 mb-4  ">Continuar para el pago</button>
             </div>
              </div>
        
        
        

        </div>
       
      </div>
    
  )
}

export default Card