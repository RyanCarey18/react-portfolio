import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "grocery-application",
      description: "Handlebars, SQL, Sequelize, Express.js, Node.js",
      link: "https://vast-ocean-43647.herokuapp.com/",
      repo: "https://github.com/RyanCarey18/grocery-application",
    },
    {
      name: "marvel-search",
      description: "APIs, JQuery, GoogleFonts, Tailwind, ",
      link: "https://ryancarey18.github.io/Marvel-Character-Search/",
      repo: "https://github.com/RyanCarey18/Marvel-Character-Search",
    },
    {
      name: "techblog",
      description:
        "Bootstrap, Handlebars, SQL, Sequelize, Express.js, express-session",
      link: "https://murmuring-shelf-05135.herokuapp.com/",
      repo: "https://github.com/RyanCarey18/tech-blog",
    },
    {
      name: "team-profile-generator",
      description: "HTML,CSS,BOOTSTRAP,JS",
      repo: "https://github.com/RyanCarey18/team-profile-generator",
    },
    {
      name: "sigma-cleaning",
      description: "REACT.js, GraphQL, Heroku, JWT",
      link: "https://ryancarey18.github.io/workday-scheduler/",
      repo: "https://sigma-cleaning.herokuapp.com/",
    },
    {
      name: "api-social-network",
      description: "MongoDB, Mongoose, Express.js",
      repo: "https://github.com/RyanCarey18/API-Social-Network",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
