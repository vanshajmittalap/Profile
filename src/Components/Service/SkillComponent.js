import React from 'react'

function SkillComponent(props) {
    return (
        <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <img src={props.lk} alt='' style={{width:'60px', height:'60px'}}></img>
              </div>
              <div className="skills__meta" style={{width:"100%"}}>
                <h1 className="skills__text">{props.name}</h1>
                
              </div>
            </div>
          </div>
    )
}

export default SkillComponent
