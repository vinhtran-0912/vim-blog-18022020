import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/layout/indexPage.css';

const AppContext = React.createContext();

const IndexPage = () => {
  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <ThemeContext.Provider value={this.state.theme}>
        {/* <Toolbar changeTheme={this.toggleTheme} /> */}
      </ThemeContext.Provider>
      <Section>
        <ThemedButton />
      </Section>
    </Router>
  );
};

export default IndexPage;
