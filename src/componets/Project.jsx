import React from "react";
import projects from "../../src/constants/data";
import Card from "../componets/Card"

export default function Projects() {
    return (
        <div>

            <div className=" text-gray-700 font-bold py-12 mb-12 text-center text-5xl">
                <h2>Projects</h2>
            </div>
            <div className="">
                <Card projects={projects} />
            </div>

        </div>


    )
}