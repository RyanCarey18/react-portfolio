(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover-image.402a471b.jpg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/myPic.b0833db3.jpg"},function(e,t,a){var n={"./calculator.jpg":15,"./led-wall.jpg":16,"./pastel-puzzels.jpg":17,"./run-buddy.jpg":18,"./surf-report.jpg":19};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/calculator.a19f2b67.jpg"},function(e,t,a){e.exports=a.p+"static/media/led-wall.653c2b3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/pastel-puzzels.ed494730.jpg"},function(e,t,a){e.exports=a.p+"static/media/run-buddy.938f8fe0.jpg"},function(e,t,a){e.exports=a.p+"static/media/surf-report.12557c9b.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(12),a(1)),i=a(6),m=a.n(i);var s=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Ryan Carey"),r.a.createElement("img",{src:m.a,alt:"wooden background"}),e.children)};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var d=function(e){var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=u(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},u(e.name)))}))))},f=function(e){return r.a.createElement("div",null,e.children)};var g=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("img",{src:a(13),className:"me-pic",alt:"Ryan"})),r.a.createElement("p",null,"My name is Ryan Carey and I originally went to school for accounting. After deciding that I wanted more out of my work life I switched gears and took a coding bootcamp through the University of New Hampshire. My love of computers traces back to when I was a child and I would always be going through all the settings on the family computer and wowing my family with the things I was doing. I hope to acquire a job and be able to turn my passion into a career."),r.a.createElement("p",null,"Full-Stack Web Developer attempting to build a more intuitive user experience on the web utilizing experience in customer service. Recently earned a certificate in Full Stack Web Development from the University of New Hampshire, developed skills in JavaScript, CSS, React.js, Node.js, and responsive web design. Strengths in meeting deadlines and teamwork working on projects to create a smooth user experience that works efficiently. Worked on a team of three to develop an app that helps users pick groceries at a store that organizes them by aisle for a faster shopping experience\u2014excited to leverage expertise and knowledge on a fast-paced, quality-driven team to maximize experiences on the web.")))};var E=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,o=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(14)("./".concat(n,".jpg")),alt:p(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},p(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,o)))};var h=function(){var e=Object(n.useState)([{name:"surf-report",description:"MERN Stack",link:"https://github.com",repo:"https://github.com"},{name:"pastel-puzzels",description:"MERN Stack",link:"https://github.com",repo:"https://github.com"},{name:"run-buddy",description:"HTML/CSS",link:"https://github.com",repo:"https://github.com"},{name:"led-wall",description:"Node/IoT",link:"https://github.com",repo:"https://github.com"},{name:"calculator",description:"React/JavaScript/CSS",link:"https://github.com",repo:"https://github.com"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(E,{project:e,key:"project"+t})}))))},b=a(2),v=a(3);var w=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],u=a.name,p=a.email,d=a.message,f=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||(l(Object(v.a)(Object(v.a)({},a),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:f})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")))};var y=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my",r.a.createElement("a",{href:"../../assets/me/Ryan-Carey-Resume.pdf",target:"blank"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var k=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,u(t.name)),r.a.createElement(f,null,function(){switch(t.name){case"about me":return r.a.createElement(g,null);case"portfolio":return r.a.createElement(h,null);case"contact":return r.a.createElement(w,null);case"resume":return r.a.createElement(y,null);default:return r.a.createElement(g,null)}}()))};var j=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/RyanCarey18"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/ryan-carey18/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/16324422/ryancarey"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var x=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement(s,null,r.a.createElement(d,{pages:t,setCurrentPage:i,currentPage:c})),r.a.createElement("main",null,r.a.createElement(k,{currentPage:c})),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5a3a5dee.chunk.js.map