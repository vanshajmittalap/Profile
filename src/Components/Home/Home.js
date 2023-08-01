import React, { useState } from "react";
import "./Home.css";
import logo from "../img/favicon1.ico";
import Typical from "react-typical";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Project">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          <div className="icon"><a href="https://www.codechef.com/users/vanshajap_123" target='_blank' rel="noreferrer">
            <img src='https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg' alt="" /></a>
          </div>
          <div className="icon"><a href="https://codeforces.com/profile/vanshajmittalap_123" target='_blank' rel="noreferrer">
            <img src='https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg' alt="" /></a>
          </div>
          <div className="icon"><a href="https://www.hackerrank.com/vanshajap" target='_blank' rel="noreferrer">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/220px-HackerRank_Icon-1000px.png' alt="" /></a>
          </div>
          <div className="icon"><a href="https://leetcode.com/vanshajmittal1204/" target='_blank' rel="noreferrer">
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt="" style={{backgroundColor:"white"}}/></a>
          </div>
          <div className="icon"><a href="https://github.com/vanshajmittalap" target='_blank' rel="noreferrer">
            <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="" /></a>
          </div>
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Skills">Skills</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Project">Projects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="container justify-content-around">
          <div className="home__meta">
            <h1 className="home__text pz__10">Hello, I am</h1>
            <h2 className="home__text pz__10">Vanshaj Mittal</h2>
            <h1 className="home__text pz__10">
              <Typical
                loop={Infinity}
                steps={[
                  "Software Developer",
                  1500,
                  "MERN Stack Developer",
                  1000,
                  "IIITIAN",
                  1000,
                  "Full Stack Developer",
                  1500,
                  "React JS Developer",
                  1000,
                  "Competitive Programmer",
                  1500
                ]}
              ></Typical>
            </h1>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
        <div className='colz-icon' >
                            <a href='https://www.linkedin.com/in/vanshaj-mittal-22800a1ba' target='_blank' rel="noreferrer">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='mailto: vanshajmittal1204@gmail.com' target='_blank' rel="noreferrer">
                                <i className='fa fa-google'></i>
                            </a>
                            <a href='https://github.com/vanshajmittalap' target='_blank' rel="noreferrer">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.instagram.com/vanshaj1204/' target='_blank' rel="noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100071782786939' target='_blank' rel="noreferrer">
                                <i className='fa fa-facebook-square'></i>
                            </a>                          
                            <a href='https://twitter.com/VanshajMittal3' target='_blank' rel="noreferrer">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://t.me/Vanshaj_Mittal' target='_blank' rel="noreferrer">
                                <i className='fa fa-telegram'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCQky2VqjAtQDonbEKjE2jxQ' target='_blank' rel="noreferrer">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            
        </div>
      </div>
    </div>
  );
}

export default Home;
