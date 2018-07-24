import React from 'react'

import '../../styles/slide.css'

export default function Slide(props) {
  return (
    <div className={
        props.index === props.activeIndex
          ? 'carousel-slide carousel-slide-active'
          : 'carousel-slide'
      }>
      <strong className='main-text'>{props.mainText}</strong>
      <div
        className="response-button"
        onClick={props.handleClick}
      >
          <small>{props.response}</small>
      </div>
    </div>
  )
}
