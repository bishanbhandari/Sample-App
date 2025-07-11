import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
const teamMembers = [
  {
    name: "Bishan Bhandari",
    role: "Frontend Developer",
    image: "/Pictures/Goku.png",
    linkedin: "https://www.linkedin.com/in/bishan-bhandari-b53682340/",
    github: "https://github.com/bishanbhandari",
  },
  {
    name: "Kyliyan Mbappe",
    role: "UI/UX Designer",
    image: "/Pictures/Mbappe.png",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Jude Bellingham",
    role: "React Developer",
    image: "/Pictures/Jude.png",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Cristaino Ronaldo",
    role: "React Developer",
    image: "/Pictures/Cr7.png",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
];

const Team = () => {
  return (
    <section id="team" className=" scroll-mt-20 bg-white py-20 px-4  md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50"
            >
              <img
                src={member.image}
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="font-bold m-auto mt-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iste
          officia, nisi nemo soluta minima consequatur doloremque. Libero
          laboriosam aliquid ab molestiae repellat quasi, perspiciatis possimus
          veritatis debitis temporibus distinctio?
        </p>
          <p className=" flex justify-center items-center font-bold underline cursor-pointer transition-all duration-300 ease-in-out  hover:scale-105">More Than 50 Employees<IoPersonCircleSharp size={40} /></p>
      </div>
    </section>
  );
};

export default Team;
