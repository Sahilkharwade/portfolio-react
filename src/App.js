import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <Sidebar />
            </div>
            <div className='col-lg-9 app_main-content'>
              <Navbar />
              <switch>
                <Route exact path='/'>
                  <About />
                </Route>
                <Route exact path='/resume'>
                  <Resume />
                </Route>
                <Route exact path='/project'>
                  <Project />
                </Route>
              </switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
