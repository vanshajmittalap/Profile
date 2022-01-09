import React from 'react'
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Service/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills />
       <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
