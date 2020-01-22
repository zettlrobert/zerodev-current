import React, { Fragment } from 'react'


import '../../scss/projectItem.scss'

const ProjectItem = projectProps => {

  const { imgURL, title, desc, githubURL, liveURL } = projectProps;

  return (
    <Fragment>
      <div className="projects-wrap">
        <div class="project-item__wrap">
          <div className="project-image__wrap">
            <img className="project-image" src={imgURL} alt="homeboardsearch" />
          </div>

          <div className="project-headline__wrap">
            <h2>{title}</h2>
          </div>

          <div className="project-desc__wrap">
            <p>{desc}</p>
          </div>

          <div className="link-container">
            <a className="github-link" href={githubURL} target="__blank">
              <i className="fab fa-github fontawesome-icon__style"></i>
              Github
          </a>
            <a className="visit-link" href={liveURL} target="__blank">
              <i className="far fa-eye fontawesome-icon__style"></i>
              Visit
          </a>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default ProjectItem
