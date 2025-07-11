import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
const projects = [
  {
    name: "KeyNest",
    description: "A secure password manager built with React and Tailwind CSS.",
    image: "/Pictures/Key.png",
  },
  {
    name: "Weatherly",
    description: "A real-time weather forecasting app using OpenWeather API.",
    image: "/Pictures/Weather.png",
  },
  {
    name: "QuickNotes",
    description: "A fast and clean note-taking PWA for productivity.",
    image: "/Pictures/Notes.png",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className=" scroll-mt-10 bg-gray-50 py-20 px-4  md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
          We are passionate developers focused on delivering elegant and
          scalable digital products. Here are some of our featured projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-20 w-full">
          <p className="font-bold flex items-center gap-2 underline cursor-pointer transition-all duration-300 ease-in-out  hover:scale-105">
            For More Projects Click Here !
            <span>
            <GoProjectSymlink  size={20}/>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
