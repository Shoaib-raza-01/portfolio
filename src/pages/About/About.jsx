import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-bg">
      <h1 className="heading">about &nbsp;me</h1>
      <div className="about-container">
        <div className="about-left" data-aos = "fade-up">
          <p className="about-desc">
            Highly technical and knowledgeable individual with a focused and enlightened personality
            with a decent skill set in frontend technologies and android apps.
            <br />
            <br />Being enthusiastic, I am splendid at communication. Moreover, 
            I've garnered significant experience from working on various projects. 
            I believe I can be the best fit to play a vital role as a team lead.
            <br />
            <br />
            As per the technical skills, I has a good understanding of core
            concepts in computer science and engineering like OOPS, DBMS, OS,
            and Networking as well as technologies like HTML5, CSS3,
            JavaScript, Django, Flutter, and ReactJs.
          </p>
        </div>
        <div className="about-right" data-aos = "fade-up">
          <img
            src={process.env.PUBLIC_URL + "/assets/profile.png"}
            alt="about-img"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
