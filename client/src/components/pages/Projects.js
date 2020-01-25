import React, { useState, Fragment } from 'react'

import ProjectItem from '../projects/ProjectItem';

import '../../scss/projects.scss';


import hbs from '../../assets/portfolio/hbs.png'
import ifd from '../../assets/portfolio/ifd.png'
import zrd from '../../assets/portfolio/zerodev.png';
import placeholder from '../../assets/portfolio/placeholder.png'
import musicbot from '../../assets/portfolio/zerodev-musicbot.png'
import summonerTracker from '../../assets/portfolio/summoner-tracker.png'


const Projects = () => {
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
      githubURL: "https://github.com/zettlrobert/iFightDepression",
      liveURL: "https://ifightdepression-cf843.web.app/"
    },
    {
      title: "zerodev",
      imgURL: zrd,
      desc: "This Application, ReactJS Frontend and Nodejs Backend. Express and Mongoose are Frameworks for the Backend and some functionality soon to be integrated.",
      githubURL: "https://github.com/zettlrobert/zerodev",
      liveURL: "https://zerodev.dev"
    },
    {
      title: "Contact Keeper",
      imgURL: placeholder,
      desc: "Metasearch engine Reactjs Frontend, Nodejs Backend. A custom Searchquery was sent to Google, Bing and DuckDuckGo API.Results are Displayed in the Dashboard",
      githubURL: "https://github.com/zettlrobert/mern-contact-keeper",
      liveURL: "#"
    },
    {
      title: "zerodev-musicbot",
      imgURL: musicbot,
      desc: "Nodejs Bot for the Chat Application Discord, with a Library and Api you can pass an URL the Bot will join the voice Channel and play the Sound.",
      githubURL: "https://github.com/zettlrobert/zerodev-musicbot",
      liveURL: "#"
    },
    {
      title: "simple-logger",
      imgURL: placeholder,
      desc: "React Redux Application to get some first Impressions of how it is used.",
      githubURL: "https://github.com/zettlrobert/simple-logger",
      liveURL: "#"
    },
    {
      title: "summoner-tracker",
      imgURL: summonerTracker,
      desc: "A simple Website where you can Track the Cooldown Timers from a competetive Game.",
      githubURL: "https://league-summoner-tracker.web.app/",
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
