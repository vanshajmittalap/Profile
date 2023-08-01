import React from "react";
import "./Project.css";
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
            <ProjectComponent name={"On-Boarding Portal"} description={"It is a Full Stack Web Application, where user onboard for registrationin organization and ask doubts that mentors and peers can solve. It has full functionality of User Authentication as Sign Up and Login."} lk={'https://github.com/vanshajmittalap/On-Boarding-Portal'}/>
            <ProjectComponent name={"Portfolio"} description={"This is my Portfolio Website. This website displays my all details and work. It is responsive and dynamic website"} lk={'https://github.com/vanshajmittalap/Profile'}/>
            <ProjectComponent name={"E-DIARY"} description={"This is a FullStack [MERN] Website. It has full functionality of User Authentication as Sign Up and Login. It stores data seperately for every users in my own created MongoDB server."} lk={'https://github.com/vanshajmittalap/E-DIARY'}/>
            <ProjectComponent name={"TextSimulator"} description={"This is a Text Simulation Website. It Simulate on Text."} lk={'https://github.com/vanshajmittalap/TextSimulator'}/>
            <ProjectComponent name={"Newsify"} description={"This is a News Reading Website. It displays News category wise by fetching an API."} lk={'https://github.com/vanshajmittalap/Newsify'}/>
           </div>
       </div>
    </div>
  );
}

export default Project;
