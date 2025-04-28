import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Profile from "../components/Profile";
import Home from "../pages/Home";
import About from "../pages/About";
import Contect from "../pages/Contect";
import Skill from "../pages/Skill";
import Project from "../pages/Project";

const MainLayout = () => {

const [open, setOpen] = useState(false)
const location = useLocation()

useEffect(()=>{
  const path = location.pathname.slice(1) || "home";
  const section = document.getElementById(path);
  if(section){
    section.scrollIntoView({behavior:"smooth"});
  }

},[location])





  return (
    
    <div className="flex min-h-screen text-white" style={{backgroundColor:"#040B14"}}>
    
      <div className={`bg-gray-900  z-40  transition-all duration-300 ${open ? 'block' : 'hidden'} md-block  md:relativel  w-64` }>
        <SideBar setOpen={setOpen} />
      </div>
      <main className="flex-1 bg-[#040B14] text-white">
        {/* <Outlet /> */}
        <Home open={open} setOpen={setOpen}/>
        <About/>
        <Skill/>
        <Project/>
        <Contect/>
      </main>
    </div>
  );
};

export default MainLayout;
