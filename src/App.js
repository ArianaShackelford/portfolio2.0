import React from 'react';
import {Portfolio} from './styles';


import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Project from './components/Project';


import './App.css';




function App() {
  return (
    <Portfolio>
      <Header/>
      <Bio/>
      <Skills/>
      <Project/>
     </Portfolio>
  );
}

export default App;
