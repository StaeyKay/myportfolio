import React from "react";
import ResumeCards from "../components/resumeCards";
import Subtitles from "../components/subtitles";

const Resume = () => {
  return (
    <div className="bg-[#222222] gap-10 text-white px-10 md:px-20">
        <div className="flex justify-center">
        <Subtitles text1="My" text2="Resume"/>
        </div>  
    <div className="gap-10 md:grid md:grid-cols-2">
    
      {/* Education */}
      <div className="space-y-10">
        <h3>Education</h3>
        <div className="space-y-10">
        <ResumeCards
            duration="May 2024 - August 2024"
            title="Web Development Trainee"
            summary="Core Skills: HTML, CSS, JavaScript, MongoDB, Express, Nodejs"
            location="MEST Africa"
          />
          <ResumeCards
            duration="September 2020 - June 2022"
            title="Master in Nuclear Science and Technologies"
            summary="Core Skills: Research, Problem-solving"
            location="Tomsk Polytechnic University"
          />
          <ResumeCards
            duration="September 2014 - May 2018"
            title="Bachelor of Science in Physics with Computer Science"
            summary="Core Skills: Analytical thinking, Programming fundamentals, Problem-solving"
            location="University of Ghana Legon"
          />
        </div>
      </div>
      {/* Experience */}
      <div className="space-y-10">
        <h3 className="pt-8 md:pt-0">Experience</h3>
        <div className="space-y-10">
        <ResumeCards
            duration="January 2024 - Present"
            title="Junior Frontend Developer"
            summary="Core Skills: Reactjs, JavaScript"
            location="Heyphord I.T Solutions"
          />
          <ResumeCards
            duration="August 2024 - August 2024"
            title="Intern"
            summary="Core Skills: Nodejs, Express, MongoDB"
            location="Core Extreme Technologies"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
