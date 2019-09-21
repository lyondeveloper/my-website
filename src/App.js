import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Experience from './components/experience';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
