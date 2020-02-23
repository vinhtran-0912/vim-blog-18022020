import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

import '../../styles/layout/indexPage.css';
import { useState } from 'react';

const AppContext = React.createContext();

const IndexPage = () => {
  const [email, setEmail] = useState('vinhtran-0912');

  return (
    <Router>
      <AppContext.Provider value={{ email }}>
        <div className="container">
          <Header />
        </div>
        <AppContext.Consumer>{context => <h1>{context.email}</h1>}</AppContext.Consumer>
      </AppContext.Provider>
    </Router>
  );
};

export default IndexPage;
