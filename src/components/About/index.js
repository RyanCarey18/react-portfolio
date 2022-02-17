import React from "react";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            src={require(`../../assets/me/myPic.jpg`)}
            className="me-pic"
            alt="Ryan"
          />
        </div>
        <p>
          My name is Ryan Carey and I originally went to school for accounting.
          After deciding that I wanted more out of my work life I switched gears
          and took a coding bootcamp through the University of New Hampshire. My
          love of computers traces back to when I was a child and I would always
          be going through all the settings on the family computer and wowing my
          family with the things I was doing. I hope to acquire a job and be
          able to turn my passion into a career.
        </p>
        <p>
          Full-Stack Web Developer attempting to build a more intuitive user
          experience on the web utilizing experience in customer service.
          Recently earned a certificate in Full Stack Web Development from the
          University of New Hampshire, developed skills in JavaScript, CSS,
          React.js, Node.js, and responsive web design. Strengths in meeting
          deadlines and teamwork working on projects to create a smooth user
          experience that works efficiently. Worked on a team of three to
          develop an app that helps users pick groceries at a store that
          organizes them by aisle for a faster shopping experience—excited to
          leverage expertise and knowledge on a fast-paced, quality-driven team
          to maximize experiences on the web.
        </p>
      </div>
    </section>
  );
}

export default About;
