import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Contact from'./Contact.jsx'
import About from './About.jsx'
import Projects from './projects.jsx'
import Skills from './skills.jsx'
import Home from './Home.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
