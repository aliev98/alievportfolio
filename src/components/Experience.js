import React from "react"
import { experience } from "../data"
import { education } from "../data"

export default function Experience(){
    return(
        <section id="experience" className="text-gray-400 bg-gray-900 body-font">
         <div className="container px-5 py-5 mx-auto text-center w-300 md:w-320 sm:px-60">
        
         <div className="w-full my-5">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience and Education
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here I present the IT related jobs, internships and educations that I have had.
          </p>
        </div>

        <div>
        <h3 className="bg-gray rounded p-4 h-full items-center font-medium text-2xl"> Experience </h3>

          {experience.map((exp) => (
            <div className="bg-gray rounded p-5 h-full items-center">
                  <span className="block container px-0 py-2 mx-auto text-center lg:px-30 p-3 p-2 title-font font-medium text-white ">
                    {exp.Company}
                  </span>
                  <span className="block">
                    {exp.Date}
                  </span>
                  <span>
                    {exp.Description}
                  </span>
            </div>
          ))}
</div>
<div>
        <h3 className="bg-gray rounded p-4 h-full items-center font-medium text-2xl"> Education </h3>

          {education.map((edu) => (
            <div>
                  <span className="block container px-0 py-2 mx-auto text-center lg:px-30 p-3 p-2 title-font font-medium text-white ">
                   {edu.School}
                  </span>
                  <span className="block">
                  {edu.Place}
                  </span>
                  <span className="block">
                  {edu.Date}
                  </span>
                  <span className="block">
                  {edu.Description}
                  </span>
            </div>
          ))}
</div>
</div>
</section>
)
}