import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () =>{
    setToggle(true)
  }

  const hideSideMenu = () => {
    setToggle(false)
  }

  const links = [
    {
        icon: <IoIosSearch />,
        name: "Search"
    }, 
    {
        icon:  <CiDiscount1 />,
        name: "Offers",
        sup: "New"
    },
    {
        icon:  <IoIosHelpBuoy />,
        name: "Help"
    }, 
    {
        icon: <IoMdPerson />,
        name: "Sign In"
    },
    {
        icon: <FaCartPlus />,
        name: "Cart",
        sup:"0"
    }

  ]
  return (
    <>
      <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}> 
        
        <div onClick={(e) => e.stopPropagation()} className='w-[500px] bg-white h-full absolute  duration-[600ms]' 
        style={{
            left: toggle? "0%" : "-100%"
    
        }}
        ></div>
         </div>
      

      
      <header className="p-[15px] shadow-xl text-[#686878] ">
        <div className="max-w-[1200px] mx-auto flex border-red-500 items-center">
          
          <div className="w-[100px]">
            <img src="/logo.png" className="w-full" alt="" />
          </div>

            <div className=''>
            <span className="font-bold border-b-[3px] border-black">
              Swiggy 
            </span> 
            {" "}Bharatpur-10, Chitwan, Nepal
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline  text-[#fc8019] cursor-pointer"
            />
          </div>
            <nav className='flex list-none gap-5 ml-auto text-18px font-semibold'>
                {
                links.map(
                    (links, index)=>{
                     return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                    {links.icon}
                    {links.name}
                    <sup>{links.sup}</sup>
                </li > 
                    }
                )
                }
                
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header
