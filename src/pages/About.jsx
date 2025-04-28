import React from "react";
import mypic from "../assets/img/pic.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#040B14] text-white p-6 md:p-12"
    >
      <h1 className="text-center text-3xl font-bold mb-6">About Me</h1>
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <img
            src={mypic}
            alt="profile"
            className="rounded-2xl shadow-xl/30 shadow-white w-full max-w-sm mx-auto"
          />
        </div>
        <div className="flex-1 space-y-8">
          <p className="text-lg">
            Hi, I'm{" "}
            <span className="font-bold text-amber-500">Nafees Qureshi</span>, a
            dedicated{" "}
            <span className="font-bold text-amber-500">
              MERN Stack Developer
            </span>{" "}
            with a strong passion for building full-stack web applications. I
            specialize in creating responsive, scalable, and user-friendly
            digital experiences.
          </p>

          <p className="text-lg mt-4">
            I have hands-on experience developing dynamic web apps using modern
            technologies like{" "}
            <span className="font-semibold">
              React, Node.js, MongoDB, and Express.js
            </span>
            . I'm always learning and pushing myself to stay updated with the
            latest trends and best practices in web development.
          </p>

          <p className="text-lg mt-4">
            I love solving real-world problems through clean code and thoughtful
            design. Whether it's a simple Portfolio system or a complex CRM
            platform, I enjoy taking ownership and delivering quality solutions.
          </p>

          <p className="text-lg mt-4">
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, Node.js,
            Express.js, MongoDB, Git, Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
