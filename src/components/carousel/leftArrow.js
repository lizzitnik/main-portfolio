import React from 'react'

import '../../styles/arrows.css'

export default function CarouselLeftArrow(props) {
  return (
    <button
        style={{
          visibility: props.activeIndex === 0
            ? 'hidden'
            : 'visible'
          }}
        className="carousel-arrow carousel-arrow-left"
        onClick={props.handleClick}>
        <span className="arrow arrow-left" />
    </button>
  )
}
