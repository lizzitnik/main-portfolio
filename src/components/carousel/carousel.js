import React from 'react'

import Slide from './slide'
import CarouselLeftArrow from './leftArrow'
import CarouselRightArrow from './rightArrow'

import '../../styles/carousel.css'

export default class Carousel extends React.Component {
  constructor() {
    super()
    this.state = {
      slides: [{
        mainText: 'I\'m a web developer and aspiring UX/UI designer',
        response: 'Uh okay... is that it?',
      }, {
        mainText: 'I have both frontend and backend experience in HTML, CSS, Javascript, jQuery, React, Redux, NodeJs, Express, and Git. I’m currently working on enhancing my skills in Sass, responsive design, and Webpack while also teaching myself Sketch.',
        response: 'Woah there slow down. Breathe. What’s the point of all this?',
      }, {
        mainText: 'When I entered college in 2012 I knew I wanted to be a vet. Five years later, I graduated with a Media Arts degree with an emphasis on filmmaking. Somewhere in that time I found my creative voice and knew that life wouldn’t be worthwhile until I let it sing.',
        response: 'Wait so you want to be a filmmaker?',
      }, {
        mainText: 'I am very proud of all my projects that I completed in film school, but a single CS class turned my attention to the wonders of code. now commit my time to crafting beautiful, clean, and usable websites.',
        response: 'I guess that makes sense. What else do you do?'
      }, {
        mainText: 'When I\'m not coding, you can find me backpacking over the cascades, playing soccer on a local co-ed team (when I’m not nursing a knee injury), or playing nerd games with some nerds at a board game cafe. Besides coding, I like to explore new skills. French and teaching myself how to bake, both with varying degrees of success',
        response: 'I’m tired of reading. Can we move on now?',
      }, {
        mainText: 'Sure! If you want to see my work and ways of contacting me you can scroll down from this page. Or if you’re too tired to scroll you can click the links below and they\'ll scroll for you.',
        response: 'Okay that was uncalled for!',
      }, {
        mainText: 'Oh sorry. I got a little carried away there. I truly appreciate you taking the time to view my portfolio and feel free to contact me about anything!',
        response: null,
      }],
      activeIndex: 0
    }
  }

  prev(e) {
    e.preventDefault()
    let prevItem = this.state.activeIndex - 1;
    if (prevItem < 0) {
      this.setState({ activeIndex: this.state.slides.length - 1 })
    } else {
      this.setState({ activeIndex: prevItem })
    }
  }

  next(e) {
    let nextItem = this.state.activeIndex + 1;
    if (nextItem > (this.state.slides.length - 1)) {
      this.setState({ activeIndex: 0 })
    } else {
      this.setState({ activeIndex: nextItem })
    }
  }

  render() {
    const slides = this.state.slides.map((slide, index) =>
      <li key={index}>
        <Slide
          index={index}
          activeIndex={this.state.activeIndex}
          handleClick={e => this.next(e)}
          {...slide}
        />
      </li>
    )

    return (
      <div className='carousel-container'>
        <div className='carousel'>
          <CarouselLeftArrow
            activeIndex={this.state.activeIndex}
            handleClick={e => this.prev(e)}
          />
          <ul className='carousel-slides'>
            {slides}
          </ul>
          <CarouselRightArrow
            slideLength={this.state.slides.length - 1}
            activeIndex={this.state.activeIndex}
            handleClick={e => this.next(e)} />
        </div>
      </div>
    )
  }
}
