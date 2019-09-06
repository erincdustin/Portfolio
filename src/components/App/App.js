import React from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header';
import ProjectPage from '../../routes/ProjectPage';
import AboutMePage from '../../routes/AboutMe';
import Contact from '../../routes/ContactMe';
import Landing from '../../routes/Landing';
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
        component={ProjectPage} />

        <Route 
        exact path={'/contact'}
        component={Contact} />
      </main>
    </div>
  );
}

export default App;
