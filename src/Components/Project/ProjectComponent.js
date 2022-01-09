import React from "react";

function ProjectComponent(props) {
  return (
    <div className="col__3">
      <div className="project__box pointer relative">
        <div className="project__box__img pointer relative">
          <div className="project__img__box">
            <img src={props.pic} alt="" className="project__img" />
          </div>
          <div className="mask__effect"></div>
        </div>
        <div className="project__meta absolute">
          <h5 className="project__text">{props.name}</h5>
          <h4 className="project__text">{props.description}</h4>
          <a href={props.lk} target='_blank' className="project__btn">
            GET MORE DETAILS
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
