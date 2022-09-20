import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './Components/Home';
import Filter from './Components/Filter';
import Details from './Components/Details';
import PageNotFound from '../src/PageNotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/filter' component={Filter} />
        <Route path="/details" component={Details} />
        <Route path='*' component={ PageNotFound} />
      </Layout>
    </Router>
  );
}

export default App;
