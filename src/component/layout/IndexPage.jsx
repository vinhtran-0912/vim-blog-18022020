import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import '../../styles/layout/indexPage.css';

const IndexPage = () => {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
    </Router>
  );
};

export default IndexPage;
