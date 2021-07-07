import React from 'react';
import { Router } from '@reach/router';
import Details from '../components/Details';
import App from '../components/App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageRouter = () => (
  <div className="main__container">
    <Navbar />
    <Router>
      <App path="/" />
      <Details path="/details/:id" />
    </Router>
    <Footer />
  </div>
);

export default PageRouter;
