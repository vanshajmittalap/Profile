import React from "react";
import "./About.css";
import Myimg from '../img/IMG_20221011_214051.jpg';

function About() {
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={"https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">ABOUT ME</h1>
            <div className="about__meta">
              <p className="about__text p__color" style={{color:'white'}}>
                My name is Vanshaj Mittal. I am pursuing "<b>Bachelor of Technology (B.Tech) Degree Batch [2020-24]</b>" from "<b>Indian Institute of Information Technology, Pune (IIIT Pune)</b>". I am Fullstack Software Developer.
              </p>
              <p className="about__text p__color" style={{color:'white'}}>I have an excellent command over Data Structures & Algorithms, OOPS, and Problem-Solving skills. I am proficient with core subjects such as Operating Systems, DBMS, OOPS. I have experience of Software Development.</p>
              <p className="about__text p__color" style={{color:'white'}}>
              I have created many Full Stack Projects using MERN Stack. Also I have worked on many Projects with Software Developers in some organizations. I am very passionate for learning new Skills. I am Full Stack Developer. I was School Topper in Class XII and achieved many Awards
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="Resume.pdf" download="Vanshaj Mittal Resume.pdf">
                  <button className="about btn pointer">GET RESUME</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">HIRE ME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
