import React from "react";
import AboutMe from './AboutMe/AboutMe';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

export default function Section({ title, id }) {
  function addSection(id){
    console.log("in add section");

    switch (id) {
      case "aboutMe":
        return <AboutMe />;

      case "skill":
        return <Skill />;

      case "education":
        return <Education />;

      case "service":
        return <Service />;

      case "portfolio":
        return <Portfolio />;

      case "contact":
        return <Contact />;
      
      default:
        break;
    }
  }
  return (
    
      <div className={"section"}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <div>{id.length > 0 ? addSection(id) : console.log("err")}</div>
        </div>
      </div>
   
  );
}
