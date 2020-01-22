import React, { Fragment } from 'react'


import '../../scss/projectItem.scss'

import hbs from '../../assets/portfolio/hbs.png'
import ifd from '../../assets/portfolio/ifd.png'
import zrd from '../../assets/portfolio/zerodev.png';
import placeholder from '../../assets/portfolio/placeholder.png'

const ProjectItem = () => {

  const projects = [
    {
      id: 1,
      title: "Hombeboardsearch",
      imgURL: hbs,
      desc: "Metasearch engine Reactjs Frontend, Nodejs Backend. A custom Searchquery was sent to Google, Bing and DuckDuckGo API.Results are Displayed in the Dashboard.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "iFightDepression",
      imgURL: ifd,
      desc: "Simple, modern Landing-Page JavaScript, HTML and CSS.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "zerodev",
      imgURL: zrd,
      desc: "This Application, ReactJS Frontend and Nodejs Backend. Express and Mongoose are Frameworks for the Backend and some functionality soon to be integrated.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "Contact Keeper",
      imgURL: placeholder,
      desc: "Metasearch engine Reactjs Frontend, Nodejs Backend. A custom Searchquery was sent to Google, Bing and DuckDuckGo API.Results are Displayed in the Dashboard",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "zerodev-musicbot",
      imgURL: placeholder,
      desc: "Nodejs Bot for the Chat Application Discord, with a Library and Api you can pass an URL the Bot will join the voice Channel and play the Sound.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "simple-logger",
      imgURL: placeholder,
      desc: "React Redux Application to get some first Impressions of how it is used.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      id: 1,
      title: "summoner-tracker",
      imgURL: placeholder,
      desc: "A simple Website where you can Track the Cooldown Timers from a competetive Game.",
      githubURL: "#",
      liveURL: "#"
    },
  ]


  return (
    <Fragment>
      <div className="projects-wrap">
        {projects.map(project => (
          <div class="project-item__wrap">
            <div className="project-image__wrap">
              <img className="project-image" src={project.imgURL} alt="homeboardsearch" />
            </div>

            <div className="project-headline__wrap">
              <h2>{project.title}</h2>
            </div>

            <div className="project-desc__wrap">
              <p>{project.desc}</p>
            </div>

            <div className="link-container">
              <a className="github-link" href={project.githubURL} target="__blank">
                <i className="fab fa-github fontawesome-icon__style"></i>
                Github
          </a>
              <a className="visit-link" href={project.liveURL} target="__blank">
                <i className="far fa-eye fontawesome-icon__style"></i>
                Visit
          </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment >
  )
}

export default ProjectItem
