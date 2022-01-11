import React from "react";
import "./Project.css";
import Project1 from '../img/portfolio-2.jpg';
import Project2 from '../img/portfolio-4.jpg';
import Project3 from '../img/portfolio-2.jpg';
import Project4 from '../img/portfolio-4.jpg';
import ProjectComponent from "./ProjectComponent";

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading">MY LATEST PROJECTS</h1>
        <p className="heading p__color">
          These are my latest Projects that, I want to show you.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <ProjectComponent pic={Project1} name={"TextSimulator"} description={"This is a Text Simulation Website. It Simulate on Text."} lk={'https://github.com/vanshajmittalap/TextSimulator'}/>
             <ProjectComponent pic={Project2} name={"Portfolio"} description={"This is my Portfolio Website. This website displays my all details and work. It is responsive and dynamic website"} lk={'https://github.com/vanshajmittalap/Profile'}/>
             <ProjectComponent pic={Project3} name={"E-DIARY"} description={"This is a FullStack [MERN] Website. It has full functionality of User Authentication as Sign Up and Login. It stores data seperately for every users in my own created MongoDB server."} lk={'https://github.com/vanshajmittalap/E-DIARY'}/>
             <ProjectComponent pic={Project4} name={"Newsify"} description={"This is a News Reading Website. It displays News category wise by fetching an API."} lk={'https://github.com/vanshajmittalap/Newsify'}/>

           </div>
       </div>
    </div>
  );
}

export default Project;
