import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Login from '../Form/Login';
import '../../styles/layout/header.css';
const Header = () => {
  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            {/* <a href="#!"> */}
            <img className="header-logo" src="/images/logo.png" alt="logo" />
            {/* </a> */}
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Services</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Portfolio</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </>
  );
};

export default Header;
