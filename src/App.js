import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import School from './pages/School'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';

const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/school" component={School} exact />
      </Switch>

    </Router>

  );
}

export default App;

