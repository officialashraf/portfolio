import React from "react";
import portfolioTheme from "../assets/img/portfolio theme.jpg";
import crmTheme from "../assets/img/crm theme.jpg";
import armoredVehicle from "../assets/img/armored vehicle.jpg";
import medicomanager from "../assets/img/medicomanager.jpg"

const Project = () => {
  return (
    <section id="project" className="px-4 md:px-8 lg:px-12 min-h-screen mb-8">
      <h1 className="text-center text-4xl mb-8 font-bold">Projects </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 items-ce">
        <div className="bg-[#101828] p-2 rounded-xl shadow-md shadow-white hover:scale-105 transition-all duration-300">
          <a href="https://nafeesh-kurreshi-portfolio.netlify.app/" target="_blank">
            <img src={portfolioTheme} className="" />
          </a>

          <h2 className="text-xl font-bold text-white mb-2">Portfolio</h2>
          <p className="text-gray-300 mb-2">
            This is a responsive personal portfolio website built using
            React.js, HTML, CSS, and TailwindCSS. The portfolio includes all my
            projects, skills, a contact form, and links to my social media
            profiles.It features modern UI elements such as smooth scrolling,
            animation effects, and a side bar toggle.
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Tech: React,CSS, Tailwind CSS
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nafeesh473/My-Portfolio.git"
              className="text-amber-500 underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-[#101828] p-2 rounded-xl shadow-md shadow-white hover:scale-105 transition-all duration-300">
          <a href="https://new-crm-frontend.vercel.app/" target="_blank">
            <img src={crmTheme} className="" />
          </a>

          <h2 className="text-xl font-bold text-white mb-2">
            CRM Management System{" "}
          </h2>
          <p className="text-gray-300 mb-2">
            A full-stack CRM web application with role-based login via mobile
            OTP. Admin can manage employees and assign leads; employees can
            manage their assigned leads. Implemented complete CRUD operations,
            secure authentication, and responsive UI. Built using React
            (frontend), Node.js + Express (backend), and MongoDB (database).
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Tech: React, Node.js, Express, MongoDB, Bootstrap
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nafeesh473/new-crm-project.git"
              className="text-amber-500 underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-[#101828] p-2 rounded-xl shadow-md shadow-white hover:scale-105 transition-all duration-300">
          <a href="https://armoredvehicle.netlify.app/" target="_blank">
            <img src={armoredVehicle} className="" />
          </a>

          <h2 className="text-xl font-bold text-white mb-2">
          Armored Vehicles
          </h2>
          <p className="text-gray-300 mb-2">
            Armored Vehicles is a fully responsive single-page React website
            built using React.js, HTML, CSS, and Bootstrap. The project features
            a scrollable layout, fixed navbar, and multiple sections such as
            Product, Technology, About, and Contact. This website functions
            smoothly across all devices.
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Tech: React, CSS,Bootstrap
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nafeesh473/Armored-Vehicle-Project.git"
              className="text-amber-500 underline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>




        <div className="bg-[#101828] p-2 rounded-xl shadow-md shadow-white hover:scale-105 transition-all duration-300">
          <a href="https://madico-manager.netlify.app/" target="_blank">
            <img src={medicomanager} className="" />
          </a>

          <h2 className="text-xl font-bold text-white mb-2">
          Medico Manager
          </h2>
          <p className="text-gray-300 mb-2">
            Medico Manager is a fully functional React website
            built using React.js, Node js,Express js, MongoDB and Tailwind. The project features
            a scrollable layout, fixed sidebar, and multiple sections such as
            Home, Medicine, Sale, Purchase, sale report and Purchase report.
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Tech: React js, Node js, Express js, MongoDB, Tailwind, React Icon, jwt 
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/nafeesh473/madicomanager-frontend.git"
              className="text-amber-500 underline"
              target="_blank"
              >
              GitHub
            </a>
          </div>
        </div>
            

      </div>
    </section>
  );
};

export default Project;
