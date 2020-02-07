import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FuturamaAppFn from '../container/FuturamaAppFn.js';
import Header from '../components/header/Headers.js';
import { Detail } from '../components/detail/Details.js';
import styles from './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Header className={styles.header}/>
        <Switch>
          <Route exact path="/" component={FuturamaAppFn} />
          <Route path="/:character" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
  
}
