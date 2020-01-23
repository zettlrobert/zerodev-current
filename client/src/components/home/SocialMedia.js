import React, { Fragment } from 'react'


import '../../scss/socialmedia.scss';


const SocialMedia = () => {

  const socialMediaItems = [

    {
      name: "Github",
      icon: "fab fa-github socialmedia-icon",
      url: "https://github.com/zettlrobert"
    },
    {
      name: "Bitbucket",
      icon: "fab fa-bitbucket socialmedia-icon",
      url: "https://bitbucket.org/zettlrobert/"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin socialmedia-icon",
      url: "https://www.linkedin.com/in/robert-zettl-54b890126/"
    }
  ]


  return (
    <Fragment>
      <div className="socialmedia-wrapper">

        {
          socialMediaItems.map(socialmediaItem => (
            < div className="socialmedia-item"
              key={socialmediaItem.name}
            >
              <a href={socialmediaItem.url} target="__blank">
                <i className={socialmediaItem.icon}></i>
                <span className="socialmedia-gradient">{socialmediaItem.name}</span>
              </a>
            </div>

          ))
        }

      </div>
    </Fragment >
  )
}

export default SocialMedia
