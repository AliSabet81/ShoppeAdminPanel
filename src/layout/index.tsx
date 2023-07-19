import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import React from "react";
import { store } from "../context";

const Layout = () => {
  const {sideBarOpen} = React.useContext(store)
    return ( 
        <div className="max-h-screen flex">
            <SideBar/>
            <Outlet/>
        </div>
     );
}
 
export default Layout;