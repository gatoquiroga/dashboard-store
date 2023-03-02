import React from 'react'
import {  RiSearch2Line} from "react-icons/ri";

const Header = () => {
  return (
    <header >
    {/* Titulo en search */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
    <div>
      <h1 className="text-xl text-gray-300">La Tablada resto bar</h1>
      <p className="text-gray-500">23 Febrero 2023</p>
    </div>
    <form>
      <div className="w-full relative ">
        <RiSearch2Line className=" absolute left-3 top-1/2  -translate-y-1/2 text-gray-300"/>
      <input type="text" placeholder="Buscar" className="bg-[#1f1D2B]  rounded-lg text-gray-300 outline-none w-full py-2 pl-10 pr-4"></input>
      </div>
    </form>

    </div>
    {/*Tabs */}
    <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
      <a href="#" className="  relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]
      text-[#ec7c6a]">Platos Calientes</a>
      <a href="#" className="py-2 pr-4  ">Platos Frios</a>
      <a href="#" className="py-2 pr-4 ">Sopas</a>
      <a href="#" className="py-2">Grill</a>
      
    </nav>
    
  </header>
  )
}

export default Header
