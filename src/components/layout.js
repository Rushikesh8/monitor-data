import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout =({children}) =>{
    return(
        <>
        <div>
        <Navbar></Navbar>         
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;