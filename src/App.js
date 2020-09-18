import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Toolkit from './Components/Toolkit/Toolkit'
import Projects from './Components/Projects/Projects'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Toolkit />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
