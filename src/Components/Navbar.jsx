import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const  Navbar = () => {
    const {logout, user} = UseAuth()
  return (
    <div className="contain flex justify-between items-center py-2 lg:py-3 px-3 lg:px-0">
      <Link to={"/"} data-tooltip-id="my-tooltip" data-tooltip-content="ProductHunt" className="text-[2rem] md:text-4xl font-semibold flex-1 lg:flex-none">Product<span className="text-blue-700">Hunt</span></Link>
      <Tooltip id="my-tooltip" className="z-50"/>
      <ul className="gap-5 items-center text-xl flex"> 
        {/* <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Home</NavLink> */}
        {/* {user && <NavLink to={"/additem"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Add Item</NavLink>} */}
        {user && <NavLink to={"/productpage"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-blue-700" : "cursor-pointer"}>Home</NavLink>}
      </ul>
      <div className="flex gap-4">
      <Tooltip id="my-tooltip2" className="z-50"/>
      {
        user?.email ? <div className="flex justify-end flex-1 lg:flex-none gap-2 lg:mr-0">
          <img src={user.photoURL || "https://i.ibb.co/N6p8fKX/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} data-tooltip-id="my-tooltip4" data-tooltip-content={user.displayName}  alt="" className="w-10 h-10 border-2 border-blue-600 rounded-full cursor-pointer justify-self-end" /> <Tooltip id="my-tooltip4" className="z-50"/><Link to={"/"}><button data-tooltip-id="my-tooltip3" data-tooltip-content="Logout Now" onClick={logout} className="bg-blue-700 text-white font-semibold text-lg px-5 py-1 rounded-md lg:block">Logout</button></Link> <Tooltip id="my-tooltip3" className="z-50"/></div> : <div className="hidden lg:flex gap-4">
          <Link to={"/login"}><button className="border-cyan-700 border-2 px-5 py-1 rounded-md text-lg font-semibold">Login</button></Link>
          <Link to={"/register"} className="bg-blue-700 text-white font-semibold text-lg px-5 py-1 rounded-md">Register</Link>
        </div>
      }
      </div>
      
      
    </div>
  )
}

export default Navbar
