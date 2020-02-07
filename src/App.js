import React from 'react';

import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Project from './components/Project';


import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Bio/>
     <Skills/>
     <Project/>
    </div>
  );
}

export default App;
