import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import { Banner } from './components/Banner.js';
import Skills  from './components/Skills.jsx';
// import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      < NavBar />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact3D /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
