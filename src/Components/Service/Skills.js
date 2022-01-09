import React from "react";
import "./Skills.css";
import SkillComponent from "./SkillComponent";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">MY SKILLS</h1>
        <p className="heading p__color">
          These are my Tech and some other Skills.
        </p>
      </div>

      <div className="container">
        <div className="row">

          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png'} name={'C'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png'} name={'C++'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png'} name={'Python'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'} name={'Competitive Programming'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'} name={'HTML'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png'} name={'CSS'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'} name={'JavaScript'}/>
          <SkillComponent lk={'https://w7.pngwing.com/pngs/216/509/png-transparent-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo-grass-thumbnail.png'} name={'MongoDB'}/>
          <SkillComponent lk={'https://www.pinclipart.com/picdir/big/537-5374089_react-js-logo-clipart.png'} name={'React JS'}/>
          <SkillComponent lk={'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'} name={'Express JS'}/>
          <SkillComponent lk={'https://iconape.com/wp-content/png_logo_vector/nodejs.png'} name={'Node JS'}/>
          <SkillComponent lk={'https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeamernstackdeveloper-mobile.png'} name={'MERN Stack'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'} name={'SQL'}/>
          <SkillComponent lk={'https://i.pinimg.com/originals/08/ed/5e/08ed5e21ba68fda78747257e5aa4bb70.png'} name={'Oracle'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'} name={'BootStrap'}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
