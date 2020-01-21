import React from 'react'

import '../scss/backdrop.scss'

const Backdrop = props => {
  return (
    <div className="backdrop" onClick={props.click} />
  )
}

export default Backdrop
