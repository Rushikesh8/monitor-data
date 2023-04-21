import React from "react";
import Logo from "../images/graphic-arrow-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogoutClick = () => {
    localStorage.setItem("token", "");
    navigate('/login')
  }
    return (
        <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src={Logo} alt="monitor"/>
                
              </div>
              <h1 className="mx-2 font-bold text-lg text-white">Measurement</h1>
              
            </div>
            <div class="">
              <p className="font-bold text-md text-white hover:text-teal-400 cursor-pointer" onClick={handleLogoutClick}>Logout</p>
            </div>
         
       
          </div>
        </div>
      </nav>
    )
}
export default Navbar;