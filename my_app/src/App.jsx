import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Contact from'./Contact.jsx'
import About from './About.jsx'
import Projects from './projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
