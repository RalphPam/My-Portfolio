import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Toolkit from './Components/Toolkit/Toolkit'
import Projects from './Components/Projects/Projects'
import Certificates from './Components/Certificates/Certificates'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Toolkit />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;
