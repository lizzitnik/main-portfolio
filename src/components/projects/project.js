import React from 'react'

import '../../styles/projects.css'

export default function Project(props) {
  return (
    <div className='section'>
      <div className='project'>
        <div className='image-side'>
          <div className='image'>
            <img src={props.image} alt={props.name} />
            <div className='overlay'>
              <div className='icons'>
                <a href={props.gitLink}>
                  <img src={window.location.origin + '/images/github.png'} alt='' />
                </a>
                <a href={props.liveLink}>
                  <img src={window.location.origin + '/images/live.png'} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='summary-side'>
          <h2>{props.name}</h2>
          <p>{props.synopsis}</p>
        </div>
      </div>
    </div>
  )
}
