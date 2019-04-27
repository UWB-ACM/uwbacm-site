import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Mission from './components/Mission';
import Events from './components/Events';
import Officers from './components/Officers';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Form from './components/Form';
import Sponsors from './Sponsors';
import Head from './components/Head';

import "./styles/reset.scss";
import "./styles/index.scss";

const App = () => (
  <div id="app">
    <Head />
    <Header />
    <Mission />
    <Events />
    <Officers />
    <Form />
    <SocialMedia />
    <Contact />
  </div>
);

const AppRouter = () => (
  <Router>
      <Route path="/" exact component={App} />
      <Route path="/sponsors/" component={Sponsors} />
  </Router>
);

export default AppRouter;
