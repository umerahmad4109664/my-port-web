import React from "react";
import "./Experience.css";
import { BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Wht Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
             <div>
             <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div><h4>BootStrap</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
           <div>
           <h4>React</h4>
              <small className="text-light">Experienced</small>
           </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
        
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience-detail">
              <BsPatchCheckFill className="experience-detail-icon"/>
             <div>
             <h4>Mongo DB</h4>
              <small className="text-light">Basic</small>
             </div>
            </article>
          </div>
        


        </div>
      </div>
    </section>
  );
};

export default Experience;
