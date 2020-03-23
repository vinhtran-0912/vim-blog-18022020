import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from '../Page/Home';
import Footer from './Footer';

import '../../styles/layout/indexPage.css';

const AppContext = React.createContext();

const Index = () => {
  // const [email, setEmail] = useState('vinhtran-0912');

  return (
    <Router>
      <AppContext.Provider value="">
        <div className="wrapper">
          <Header />
          <Home />
          <Footer />
        </div>
        {/* <AppContext.Consumer>{context => <h1>{context.email}</h1>}</AppContext.Consumer> */}
      </AppContext.Provider>
    </Router>
  );
};

export default Index;
