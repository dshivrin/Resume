import niloosLogo from "../assets/niloosLogo.png";
import sagLogo from "../assets/sagLogo.png";
import aeroLogo from "../assets/aeroLogo.png";

const EXPERIENCE = [
  {
    id: 0,
    name: "Niloosoft ltd.",
    position: "Full Stack developer",
    logo: niloosLogo,
    description:
      "Maintaining existing systems and developing new under the"+
      ".NET framework using C# at the server, MSSQL, Elasticsearch and MongoDB databases."+
      "Developing new features using AngularJS framework, vanilla JavaScript and jQuery. Building SPA applications from scratch using Angular 2, "+
      "ES6 typescript, css3, HTML5 and Bootstrap. Development methodology was SCRUM and TFS.",
    duration: "2015-2018 ~3 years"
  },
  {
    id: 1,
    name: "Sagramatha",
    position: "Full Stack developer",
    logo: sagLogo,
    description:
      "Server-side implementations including RESTful API’s architecture using Node.js, express.js, MongoDB and MSSQL."+
       "Using Socket.io and developing scalable SPA application. On the client side Angular 2 (up to 6) CSS3, SCSS, HTML5" +
       "ES6 typescript and Kendo. Development under the agile SCRUM methodology, and Git.",
    duration: "2018-2018 6 ~6 months"
  },
  {
    id: 2,
    name: "Aeronautics group",
    position: "Software developer",
    logo: aeroLogo,
    description: "C# Software developer. Maintained AngularJS generator application. Took part in developing company next generation flight simulator.",
    duration: "2018-2019 ~1 year 6 months"
  }
];

export default EXPERIENCE;
