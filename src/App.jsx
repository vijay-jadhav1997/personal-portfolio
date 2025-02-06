import './App.css'

import Header from './components/navbar/Header'
import Intro from './components/introduction/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import CodepenExamples from './components/codepen/CodepenExamples'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className='app'>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Skills />
        <CodepenExamples />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
