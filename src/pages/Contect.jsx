import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contect = () => {
  return (
    <section id="contect" className="min-h-screen  px-4 md:px-8 lg:px-12">
      <h1 className="text-center text-4xl mb-8 font-bold">Contect </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex items-center justify-center mb-8">
          <div
            className=" p-8 rounded-xl flex flex-col gap-5 shadow-xl/30 shadow-white w-full max-w-md"
            style={{ backgroundColor: "#101828" }}
          >
            <div>
              <SlLocationPin size={50} color="white" />
              <h1 className="block text-lg font-bold">Address</h1>
              <p className="block text-lg font-medium">
                Khajrana, Indore Madhya Pradesh 452016
              </p>
            </div>

            <div>
              <IoCallOutline size={50} color="white" />
              <h1 className="block text-lg font-bold">Call Us</h1>
              <a href="tel:+916232697169" className="block text-lg font-medium">91+ 6232697169</a>
            </div>
            <div>
              <TfiEmail size={50} color="white" />
              <h1 className="block text-lg font-bold">Email Us</h1>
              <a href='mailto:nafeeskurreshi473@gmail.com' className="block text-lg font-medium">
                nafeeskurreshi473@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8 ">
          <form
            className="p-8 rounded-xl shadow-xl/30  shadow-white w-full max-w-md"
            action="https://formsubmit.co/nafeeskurreshi473@gmail.com"
            method="POST"
            style={{ backgroundColor: "#101828" }}
          >
            <input
              type="hidden"
              name="_next"
              value="https://wa.me/916232697169?text=Hi%20I%20just%20submitted%20the%20form%20on%20your%20portfolio."
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block mb-2 text-lg font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border-2 border-white rounded-md focus:outline-none focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block mb-2 tex-lg font-medium text-white">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border-2 border-white rounded-md focus:outline-none "
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-white">
                Massage
              </label>
              <textarea
                name="massage"
                className="w-full p-8 border-2 border-white rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full border-2 mt-2 border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contect;
