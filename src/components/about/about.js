import React from 'react'

import '../../styles/about.css'

export default function About() {
  return (
    <div className='bottom-container'>
      <div className='about-title'>
        <h2>About</h2>
        <div className='mountains-container'>
          <div className='small'>
            <div className='mountain'></div>
          </div>
          <div className='large'>
            <div className='mountain'></div>
          </div>
          <div className='smallest'>
            <div className='star'></div>
          </div>
          <div className='bottom'></div>
        </div>
        <div className='underline'></div>
      </div>

      <div className='about-section'>
        <p>
           Creativity is at the core of everything that I love
           to do most, but it’s a prominent aspect of myself that I denied for a long
           time. In college I suppressed the need to do things that made me happiest
           for the sake of getting into vet school. After a year of self reflection
           and an arbitrary Java course, I finally found the courage to explore a less
           scientific side of me. I graduated college with a BFA in filmmaking and a
           proud collection of my directing, screenwriting, and editing pursuits, but
           I could never seem to forget that one random Java class that I took my
           Sophomore year. It just felt… unfinished. A year later, and after a
           full-stack web development intensive through Thinkful, I am now creating
           media in a whole new way.
         </p>
         <p>
           I’m fascinated by the way people interact with the web and I love building
           web pages that make this interaction as seamless and simple as possible. The
           goal of web-development is ever-changing and infinite in it’s possibilities
           and is what excites me most about this career path. I have a deep love for
           learning and when I’m not typing away at a computer I’m usually out playing
           soccer, reading books, or backpacking somewhere in the cascades. I’m also
           currently teaching myself French, et ce n'est pas facile.
        </p>
        <p className='skills'>
          When building web apps I frequently use: HTML, CSS, Javascript, jQuery,
          React/Redux, Node.js, Express, MongoDB, Mongoose, RESTful API, and responsive
          web design. I also dabble in Webpack, Sass, and cross-browser compatibility.
        </p>
      </div>
      <div className='contact-section'>
        <p>lizzitnik4@gmail.com</p>
        <div className='image-section'>
          <a href='https://github.com/lizzitnik' className='github'>
            <img src={window.location.origin + '/images/github.png'} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/liz-zitnik-92013a121' className='linkedIn'>
            <img src={window.location.origin + '/images/Linkedin.png'} alt='' />
          </a>
        </div>
      </div>
    </div>
  )
}
