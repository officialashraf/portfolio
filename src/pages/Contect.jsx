import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contect = () => {
  return (
    <section
      id="contect"
      className="min-h-screen text-white px-4 md:px-8 lg:px-12 bg-[#040B14]"
    >
      <h1 className="text-center text-2xl md:text-3xl font-bold pt-8">Contect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="min-h-screen flex items-center justify-center">
          <div className=" p-8 rounded-xl flex flex-col gap-5 shadow-xl/30 shadow-white w-full max-w-md" style={{backgroundColor:"#101828"}}>
            <div>
              <SlLocationPin size={50} color="white" />
              <h1 className="block text-lg font-bold">Address</h1>
              <p className="block text-lg font-medium">
                17 Islam Nagar Kailaras District Morena Madhya Pradesh 476224
              </p>
            </div>

            <div>
              <IoCallOutline size={50} color="white" />
              <h1 className="block text-lg font-bold">Call Us</h1>
              <p className="block text-lg font-medium">91+ 6232697169</p>
            </div>
            <div>
              <TfiEmail size={50} color="white" />
              <h1 className="block text-lg font-bold">Email Us</h1>
              <p className="block text-lg font-medium">
                nafeeskurreshi473@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <form
            className="p-8 rounded-xl shadow-xl/30  shadow-white w-full max-w-md"
            action="https://formsubmit.co/nafeeskurreshi473@gmail.com"
            method="POST"
            style={{backgroundColor:"#101828"}}
          >
            <div>
              <label className="block mb-2 text-lg font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full p-3 border-2 border-white rounded-md focus:outline-none focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block mb-2 tex-lg font-medium text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full p-3 border-2 border-white rounded-md focus:outline-none "
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-white">
                Massage
              </label>
              <textarea className="w-full p-8 border-2 border-white rounded-md"></textarea>
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
