import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import Icon from '@mdi/react';
import { mdiMaterialUi } from '@mdi/js';

const Skill = () => {
  return (
    <section id="skill" className="bg-[#040B14] text-white min-h-screen text-center">
      <h1 className="text-center text-4xl mb-8 font-bold">My Skills </h1>
      
      <div className="flex flex-wrap gap-6 justify-center text-center items-center">
        <div>
          HTML
          <a href="https://www.w3schools.com/Html/" target="_blank">

          <FaHtml5 size={150} color="#E14F25" className="transition-all duration-500 hover:scale-150" />
          </a>
        </div>
        <div>
          CSS
          <a href="https://www.w3schools.com/css/" target="_blank">
          <FaCss3Alt size={150} color="#0F73B8" className="transition-all duration-500 hover:scale-150" />
          </a>
        </div>
        <div>
          JS
          <a href="https://www.w3schools.com/js/" target="_blank">
          <DiJavascript size={150} color='#DBB92C' className="transition-all duration-500 hover:scale-150"/>
          </a>
          {/* <TbBrandJavascript size={150} color="#DBB92C" /> */}
        </div>
        <div>
          Mongo DB
          <a href="https://www.mongodb.com/" target="_blank">
          <SiMongodb size={150} color="green" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          Express js
          <a href="https://expressjs.com/" target="_blank">
          <SiExpress size={150} color="gray"  className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          React js
          <a href="https://react.dev/" target="_blank">
          <FaReact size={150} color="#08DAFD" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          {/* <DiNodejs size={20} color='black'/> */}
          Node js
          <a href="https://nodejs.org/en" target="_blank">
          <FaNodeJs size={150} color="#93CA51" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          Bootstrap
          <a href="https://getbootstrap.com/" target="_blank">
          <FaBootstrap size={150} color="#7F18F9" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          Tailwind
          <a href="https://tailwindcss.com/" target="_blank">
          <RiTailwindCssFill size={150} color="#1DC0CD" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
          Github
          <a href="https://github.com/" target="_blank">
          <FaGithub size={150} color="#929292" className="transition-all duration-500 hover:scale-150 "/>
          </a>
        </div>
        <div>
          Postman
          <a href="https://www.postman.com/" target="_blank">
          <SiPostman size={150} color="#FF713E" className="transition-all duration-500 hover:scale-150"/>
          </a>
        </div>
        <div>
        Material UI
        <a href="https://mui.com/material-ui/" target="_blank">
          <Icon path={mdiMaterialUi}
        title="User Profile"
        size={8}
        color="#0073E6"
        className="transition-all duration-500 hover:scale-150"
        />
        </a>
        </div>
      </div>  
    </section>
  );
};

export default Skill;
