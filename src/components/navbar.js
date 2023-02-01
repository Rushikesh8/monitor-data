import React from "react";
import Logo from "../images/graphic-arrow-svgrepo-com.svg"

const Navbar = () => {
    return (
        <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8" src={Logo} alt="monitor"/>
                
              </div>
              <h1 className="mx-2 font-bold text-lg text-white">Monitor</h1>
              <div class="hidden md:block">
                {/* <div class="ml-10 flex items-baseline space-x-4">
                  
                  <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
    
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
    
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
    
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
    
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                </div> */}
              </div>
            </div>
         
       
          </div>
        </div>
      </nav>
    )
}
export default Navbar;