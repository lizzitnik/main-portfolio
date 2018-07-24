import React from 'react'
import Project from './project'

import '../../styles/projects.css'

export default class ProjectList extends React.Component {
  constructor() {
    super()
    const origin = window.location.origin;
    this.state = {
      projects: [{
        name: 'Home',
        image: origin + '/images/home-app.png',
        gitLink: 'https://github.com/lizzitnik/home-app',
        liveLink: 'https://home-app1.herokuapp.com',
        synopsis: 'This is a simple productivity app that allows users to plan their day. After logging in, the user is welcomed and given a motivating quote of the day. Scrolling down, the user sees a 5-day forecast. Finally under the weather is a simple todo list where the user can add and delete items as they are completed.'
      }, {
        name: 'Good Dog',
        image: origin + '/images/good-dog.png',
        gitLink: 'https://github.com/lizzitnik/home-app',
        liveLink: 'https://home-app1.herokuapp.com',
        synopsis: 'A web app that allows dog owners and/or dog enthusiasts to post their pet concerns on a public forum. Users can expect comments from people in their community who have experience with specific problems. Users can post comments of their own, helping other pet owners in need.'
      }, {
        name: 'Book v. Film',
        image: origin + '/images/book-v-film.png',
        gitLink: 'https://github.com/lizzitnik/home-app',
        liveLink: 'https://book-v-film.herokuapp.com',
        synopsis: 'A web app that allows users to search and compare books and films of the same title. After typing in a film/book title, users will see a side-by-side comparison of the film poster and book cover along with information on the director and the year each was produced. Users can then click a drop-down menu that reveals synopses and ratings.'
      }]
    }
  }
  render() {
    const projects = this.state.projects.map((project, index) =>
      <li key={index}>
        <Project {...project} />
      </li>
    )
    return (
      <div>
        <div className='project-title'>
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
          <h2>Projects</h2>
          <div className='underline'></div>
        </div>
        <ul className='projects'>
          {projects}
        </ul>
      </div>
    )
  }
}
