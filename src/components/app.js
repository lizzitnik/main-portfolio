import React from 'react'

import Header from './header/header'
import ProjectList from './projects/project-list'
import About from './about/about'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <ProjectList />
      <About />
    </div>
  )
}
