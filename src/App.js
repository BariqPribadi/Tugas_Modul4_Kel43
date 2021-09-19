import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import B from './pages/B/B';
import C from './pages/C/C';
import A from './pages/A/A';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <A/>
        </Route>
        <Route path="/about" exact>
          <B/>
        </Route>
        <Route path="/contact" exact>
          <C/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
