import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SkillBar } from "./SkillBar";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article >
            <div className="experience__details"><h4>HTML</h4><BsPatchCheckFill /></div>
           <SkillBar prct="90" skill='html'/>
            </article>
            <article >
            <div className="experience__details"><h4>CSS</h4><BsPatchCheckFill /></div>
            <SkillBar prct="80" skill='css'/>
            </article>
            <article>
            <div className="experience__details"><h4>React</h4><BsPatchCheckFill /></div>

              <SkillBar prct="70" skill='react'/>
            </article>
            <article>
            <div className="experience__details"><h4>Bootstrap</h4><BsPatchCheckFill /></div>

              <SkillBar prct="90"  skill='bootstrap'/>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article >
            <div className="experience__details"><h4>Node.Js</h4><BsPatchCheckFill /></div>

              <SkillBar prct="10"  skill='node' />
            </article>
            <article >
            <div className="experience__details"><h4>Express JS</h4><BsPatchCheckFill /></div>

              <SkillBar prct="20" skill='express' />
            </article>
            <article>
              
              
              <div className="experience__details"><h4>MongoDB</h4><BsPatchCheckFill /></div>
              <SkillBar prct="30" skill='mongoDB' />
            </article>
            <article >
              
            <div className="experience__details"><h4>MySql</h4><BsPatchCheckFill /></div>
              <SkillBar prct="80" skill='mysql' />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
