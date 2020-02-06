import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FuturamaAppFn from '../container/FuturamaAppFn.js';
import Header from '../components/header/Headers.js';
import { Detail } from '../components/detail/Details.js';
import styles from './App.css';


const Home = () => (
  <h1>Home</h1>
);


export default function App() {
  return (
    <div>
      <Router>
        <Header className={styles.header}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:character" component={Detail} />
        </Switch>
      </Router>
      <FuturamaAppFn className={styles.character} />
    </div>
  );
  
}
