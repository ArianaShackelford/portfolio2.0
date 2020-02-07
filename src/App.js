import React from 'react';
import {Grommet} from 'grommet';

import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Project from './components/Project';


import './App.css';

const theme = {
  global: {
    font: {
      family: 'Abel, sans-serif',
      size: '18px',
      height: '20px'
    }
  }
}


function App() {
  return (
    <Grommet theme={theme}>
     {/* <Header/> */}
     <Bio/>
     <Skills/>
     <Project/>
     </Grommet>
  );
}

export default App;
