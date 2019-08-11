import React from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import AboutMePage from '../../routes/AboutMe';
import Contact from '../../routes/ContactMe';
import Landing from '../../routes/Landing';
import MySkills from '../../routes/MySkills';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Route 
        exact path={'/'}
        component={Landing} />

        <Route 
        exact path={'/aboutMe'}
        component={AboutMePage} />

        <Route 
        exact path={'/projects'}
        component={Projects} />

        <Route 
        exact path={'/contact'}
        component={Contact} />

        <Route 
        exact path={'/skills'}
        component={MySkills} />
      </main>
    </div>
  );
}

export default App;
