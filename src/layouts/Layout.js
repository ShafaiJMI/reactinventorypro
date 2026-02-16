import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Navigation from "./Navigation";
import TopMenu from "./TopMenu";
import Notification from "../components/Notification";
import Messages from "../components/Messages";

function Layout(){
    return(
        <div className="">
            <Notification/>

        <Navigation />
            <div className="flex-1 flex flex-col md:ml-64">
            <TopMenu />
        <Outlet />
            </div>
        </div>
    );
}

export default Layout;