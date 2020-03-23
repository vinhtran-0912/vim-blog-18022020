import React from "react";

import Advertisement from '../Alert/Advertisement';
import Modal from '../Modal/Modal';
import Login from '../Form/Login';
import '../../styles/page/home.css';

const Home = () => (
  <div className="home-container">
    <Modal>
      <Login />
    </Modal>
    <Advertisement />
    <section id="main">
      <section className="thumbnails">
        <div>
          <a href="#0">
            <img src="images/post/01.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
          <a href="#0">
            <img src="images/post/02.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
        </div>
        <div>
          <a href="#0">
            <img src="images/post/03.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
          <a href="#0">
            <img src="images/post/04.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
          <a href="#0">
            <img src="images/post/05.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
        </div>
        <div>
          <a href="#0">
            <img src="images/post/06.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
          <a href="#0">
            <img src="images/post/07.jpg" alt="" />
            <h3>Lorem ipsum dolor sit amet</h3>
          </a>
        </div>
      </section>
    </section>
  </div>
)

export default Home;
