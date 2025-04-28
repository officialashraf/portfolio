import React from "react";
import mypic from "../assets/img/pic.jpg";
import { NavLink } from "react-router-dom";
import Mycv from "../../public/My New Resume.pdf";

const Home = ({ setOpen, open }) => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-between items-center px-4 py-8"
      >
        <button
          onClick={() => setOpen(!open)}
          className=" top-4 fixed left-4 z-50  hover:bg-gray-900 text-white px-2 py-1 rounded"
        >
          ☰
        </button>
        <div className=" flex flex-col items-center justify-center w-full text-white">
          <p className="text-4xl font-bold text-white  mt-2  transition-all duration-500 hover:scale-150 hover:animate-bounce active:scale-125">
            Nafeesh Kurreshi
          </p>
          <span className="text-2xl font-bold text-gray-300 mt-2 transition-all duration-500 hover:scale-150 animate-pulse active:scale-125">
            I'm a
          </span>
          <p className="text-4xl font-bold text-white  mt-2  transition-all duration-500 hover:scale-150 hover:animate-bounce active:scale-125">
            Full Stack Developer
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-white  p-2 hover:bg-[#040B14] hover:text-white hover:border-2 hover:border-white cursor-pointer text-[#040B14]">
              <a href={Mycv} download="Nafeesh-Kurreshi-CV.pdf">
                CV Donwload
              </a>
            </button>
            <button className="bg-[#040B14] hover:bg-white hover:text-[#040B14] cursor-pointer text-white px-4 border-white border-2">
              <NavLink to="/contect">Contect</NavLink>
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center min-h-screen">
          <img
            src={mypic}
            alt="my-pic"
            className="h-100 w-100 shadow-xl/50  shadow-white rounded-full border-4 border-[#E1E1E2] object-fill max-w-sm mx-auto "
          />
        </div>
      </section>
    </>
  );
};

export default Home;
