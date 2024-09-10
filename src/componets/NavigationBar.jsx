import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import Resume from '../assets/Dave-Resume.pdf'

export default function NavigationBar() {

    return (
        // navbar
        <nav className="max-w">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* logo */}
                        <div>
                            <a className="flex items-center space-x-4 py-3 px-3 text-gray-700 " href="#home">
                                <img width="80" height="80" src="https://img.icons8.com/dotty/80/resume-website.png" alt="resume-website" />
                                <span className="text-gray-700 font-bold hover:text-gray-900">Portfolio</span>
                            </a>
                        </div>


                    </div>
                    {/* secondary nav */}
                    <div className="flex items-center space-x-1">

                        <a href="#projects" className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center mr-4" >
                            <MdWork className="mr-4" size={30} />Project
                        </a>
                        <a href={Resume} download={'Dave Resume'} className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center mr-4" >
                            <AiFillProfile className="mr-4" size={30} />Resume
                        </a>

                    </div>

                </div>
            </div>
        </nav>
    )
}