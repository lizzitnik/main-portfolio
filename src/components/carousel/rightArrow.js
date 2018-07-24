import React from 'react'

import '../../styles/arrows.css'

export default function CarouselRightArrow(props) {
  return (
    <button
        style={{
          visibility: props.activeIndex === props.slideLength
            ? 'hidden'
            : 'visible'
          }}
        className="carousel-arrow carousel-arrow-right"
        onClick={props.handleClick}>
      <span className="arrow arrow-right" />
    </button>
  )
}
