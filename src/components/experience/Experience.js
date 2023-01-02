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
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <SkillBar prct="90" skill='html'/>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <SkillBar prct="80" skill='css'/>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <SkillBar prct="70" skill='react'/>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <SkillBar prct="90"  skill='bootstrap'/>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
              <SkillBar prct="10"  skill='node' />
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Express</h4>
              <SkillBar prct="20" skill='express' />
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <SkillBar prct="30" skill='mongoDB' />
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MySql</h4>
              <SkillBar prct="80" skill='mysql' />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
