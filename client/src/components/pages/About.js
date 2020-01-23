import React, { Fragment } from 'react'

import '../../scss/about.scss'

const About = () => {
  return (
    <Fragment>
      <div className="about-wrap">
        <h2>About</h2>

        <div className="placeholder">
          <p>
            Currently under reconstruction, content coming soon...
        </p>
          <br />
          <p>
            I plan on writting some small technology related Articles for myself and publish them here.
        </p>
          <br />
          <p>
            backend with an api to make some tools availabe for myself and a DIY CMS for my Content here are soon to come.
        </p>
        </div>

        <div className="comingSoon">
          <div class="loaders-wrapper">
            <div class="c-loader-wrap">
              <div class="load-wrap">
                <div class="gr-1">
                  <div class="h-1">
                    <h2>coming soon...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default About
