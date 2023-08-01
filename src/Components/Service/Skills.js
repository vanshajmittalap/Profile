import React from "react";
import "./Skills.css";
import SkillComponent from "./SkillComponent";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">MY SKILLS</h1>
        <p className="heading p__color">
          These are my Tech and Soft Skills.
        </p>
      </div>

      <div className="container">
        <div className="row">

          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/380px-C_Programming_Language.svg.png'} name={'C'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png'} name={'C++'}/>
          <SkillComponent lk={'https://cdn-icons-png.flaticon.com/512/5968/5968282.png'} name={'Java'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'} name={'JavaScript'}/>
          <SkillComponent lk={'https://www.pinclipart.com/picdir/big/537-5374089_react-js-logo-clipart.png'} name={'React JS'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'} name={'HTML'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png'} name={'CSS'}/>
          <SkillComponent lk={'https://iconape.com/wp-content/png_logo_vector/nodejs.png'} name={'Node JS'}/>
          <SkillComponent lk={'https://w7.pngwing.com/pngs/216/509/png-transparent-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo-grass-thumbnail.png'} name={'MongoDB'}/>
          <SkillComponent lk={'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'} name={'Express JS'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'} name={'Problem Solving'}/>
          <SkillComponent lk={'https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeamernstackdeveloper-mobile.png'} name={'MERN Stack'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'} name={'SQL'}/>
          <SkillComponent lk={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} name={'GIT/GitHub'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'} name={'DataStructure & Algorithm'}/>
          <SkillComponent lk={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png'} name={'OOPs'}/>
          <SkillComponent lk={'https://e7.pngegg.com/pngimages/756/673/png-clipart-database-management-system-computer-icons-microsoft-sql-server-corresponding-miscellaneous-angle.png'} name={'DBMS'}/>
          <SkillComponent lk={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBvyXqDHjQUB1ujdjWdQo4geCu96U3YBAeQKRPphlP_w6p2gvm24AVpkqeE3iJDo9h5M&usqp=CAU'} name={'Operating System'}/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
