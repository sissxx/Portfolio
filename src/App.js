import './App.css';
import React from 'react';

import { About } from './components/About/About';
import { Educations } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Home/HomePage';
import { Projects } from './components/Projects/Projects';
import { Certificates } from './components/Certifications/Certificates';

function App() {

  return (
    <div className="App">

      <Header />
      <main className='main'>

        <HomePage />
        <About />
        <Educations />
        <Certificates/>
        <Projects />

      </main>
      <Footer />

    </div>
  );
}

export default App;
