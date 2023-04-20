import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout =({children}) =>{
    return(
        <>
        <div>
        {/* <Navbar></Navbar> */}
        <Sidebar></Sidebar>
            
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;