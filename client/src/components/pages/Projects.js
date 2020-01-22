import React, { useState, useEffect, Fragment } from 'react'

import ProjectItem from '../projects/ProjectItem';

import '../../scss/projects.scss';


import hbs from '../../assets/portfolio/hbs.png'
import ifd from '../../assets/portfolio/ifd.png'
import zrd from '../../assets/portfolio/zerodev.png';
import placeholder from '../../assets/portfolio/placeholder.png'



const Projects = () => {
  useEffect(() => {

    projectsState.allProjects.map(item => (
      console.log(item)
    ))
  })

  // Get Data form Github with API
  const [projectsState] = useState({
    allProjects: [{
      title: "Hombeboardsearch",
      imgURL: hbs,
      desc: "Metasearch engine Reactjs Frontend, Nodejs Backend. A custom Searchquery was sent to Google, Bing and DuckDuckGo API.Results are Displayed in the Dashboard.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "iFightDepression",
      imgURL: ifd,
      desc: "Simple, modern Landing-Page JavaScript, HTML and CSS.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "zerodev",
      imgURL: zrd,
      desc: "This Application, ReactJS Frontend and Nodejs Backend. Express and Mongoose are Frameworks for the Backend and some functionality soon to be integrated.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "Contact Keeper",
      imgURL: placeholder,
      desc: "Metasearch engine Reactjs Frontend, Nodejs Backend. A custom Searchquery was sent to Google, Bing and DuckDuckGo API.Results are Displayed in the Dashboard",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "zerodev-musicbot",
      imgURL: placeholder,
      desc: "Nodejs Bot for the Chat Application Discord, with a Library and Api you can pass an URL the Bot will join the voice Channel and play the Sound.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "simple-logger",
      imgURL: placeholder,
      desc: "React Redux Application to get some first Impressions of how it is used.",
      githubURL: "#",
      liveURL: "#"
    },
    {
      title: "summoner-tracker",
      imgURL: placeholder,
      desc: "A simple Website where you can Track the Cooldown Timers from a competetive Game.",
      githubURL: "#",
      liveURL: "#"
    }]
  })





  return (
    <Fragment>
      <div className="projects-wrap">
        <div className="projects-gallery">
          {projectsState.allProjects.map(project => (
            <ProjectItem
              key={project.title}
              imgURL={project.imgURL}
              title={project.title}
              desc={project.desc}
              githubURL={project.githubURL}
              liveURL={project.liveURL}
            />
          ))}
        </div>

      </div>
    </Fragment>
  )
}

export default Projects
