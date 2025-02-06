import './App.css'

import Header from './components/navbar/Header'
import Intro from './components/introduction/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className='app'>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
