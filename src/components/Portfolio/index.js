import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "grocery-application",
      description:
        "HTML, CSS, Bootstrap, Handlebars, SQL, Sequelize, Express.js,Node.js",
      link: "https://vast-ocean-43647.herokuapp.com/",
      repo: "https://github.com/RyanCarey18/grocery-application",
    },
    {
      name: "marvel-search",
      description: "HTML, JavaScript, CSS, API, JQuery, GoogleFonts",
      link: "https://ryancarey18.github.io/Marvel-Character-Search/",
      repo: "https://github.com/RyanCarey18/Marvel-Character-Search",
    },
    {
      name: "techblog",
      description:
        "HTML, CSS, Bootstrap, Handlebars, SQL, Sequelize, Express.js, Node.js",
      link: "https://murmuring-shelf-05135.herokuapp.com/",
      repo: "https://github.com/RyanCarey18/tech-blog",
    },
    {
      name: "weather-application",
      description: "HTML,CSS,BOOTSTRAP,JS",
      link: "https://ryancarey18.github.io/Weather-Application/",
      repo: "https://github.com/RyanCarey18/Weather-Application",
    },
    {
      name: "workday-scheduler",
      description: "PWA, Heroku, IndexDb",
      link: "https://ryancarey18.github.io/workday-scheduler/",
      repo: "https://github.com/RyanCarey18/workday-scheduler",
    },
    {
      name: "text-editor",
      description: "HTML, CSS, JS",
      link: "https://ryans-text-editor.herokuapp.com/",
      repo: "https://github.com/RyanCarey18/text-editor-pwa",
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
