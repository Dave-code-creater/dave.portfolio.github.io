import React from 'react';
import HeadShot from "../assets/Digital photo - TAN DAT TA(1).jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Hero() {
  return (
    <section id="home" className='px-20 grid grid-cols-5 gap-4 py-10'>
      {/* Text */}
      <div className='col-span-3 flex flex-col justify-center pt-48'>
        <h2>Hi, I'm Dave👋</h2>
        <p>A passionate engineering student with a focus on software development, machine learning, and problem-solving.I'm dedicated to building innovative solutions and learning new technologies to drive the future of engineering.Feel free to reach out if you'd like to collaborate on a project or just chat about technology!</p>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/Dave-code-creater" className="py-3 px-3 text-gray-700 hover:text-gray-900 flex items-center">
            <FaGithub />Github
          </a>
          <a href="https://www.linkedin.com/in/tan-dat-ta" className="py-3 px-3 text-gray-700 hover:text-gray-900 flex items-center">
            <FaLinkedin />LinkedIn
          </a>
          <a href="mailto:tatandat11012005@gmail.com" className="py-3 px-3 text-gray-700 hover:text-gray-900 flex items-center">
            <MdMail />Gmail
          </a>
        </div>
      </div>

      {/* Headshot */}
      <div className="col-span-2 flex justify-center items-center">
        <img src={HeadShot} className='object-cover' alt="Headshot" />
      </div>
    </section>
  );
}
