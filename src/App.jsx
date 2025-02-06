import './App.css'

import Header from './components/navbar/Header'
import Intro from './components/introduction/Intro'
import Projects from './components/projects/Projects'

function App() {

  return (
    <div className='app'>
      <Header />
      <Intro />
      <Projects />

    </div>
  )
}

export default App
