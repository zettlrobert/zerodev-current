import React, { useState, useEffect, Fragment } from 'react'

import ProjectItem from '../projects/ProjectItem';
import Spinner from '../../utils/Spinner';
import Footer from '../layout/Footer/Footer';
import '../../scss/projects.scss';

const Projects = () => {
  useEffect(() => {
    getRepos();
  }, [])
  // Get Data form Github with API
  const [projectState, setProjectState] = useState({
    repos: [],
    loading: true,
  })

  const getRepos = async () => {
    setProjectState({ loading: true })
    try {
      const res = await fetch(`https://api.github.com/users/zettlrobert/repos?sort=updated `, {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      })
      const data = await res.json()

      if (data) {
        console.log({ data: data })
        setProjectState({ repos: data, loading: false })
      }
    } catch (err) {
      setProjectState({ repos: err, loading: true })
    }
  }


  return (
    <Fragment>
      <div className="projects-wrap">
        {projectState.loading
          ?
          (<Fragment> <div className="spinner-wrap">
            <Spinner />
          </div></Fragment>)
          :
          (<Fragment></Fragment>)
        }
        <div className="projects-gallery">
          {projectState.loading ? (<Fragment>

          </Fragment>) : (<Fragment>
            {projectState.repos.map((repo, index) => (
              <ProjectItem
                key={repo.id}
                imgURL={`https://raw.githubusercontent.com/zettlrobert/${repo.name}/master/docs/cover.png` }
                title={repo.name}
                desc={repo.description}
                githubURL={repo.html_url}
                liveURL={repo.homepage !== null ? repo.homepage : null}
              />
            ))}
          </Fragment>)}

        </div>

      </div>
      <Footer />
    </Fragment>
  )
}

export default Projects
