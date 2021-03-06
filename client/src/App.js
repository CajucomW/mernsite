import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import './App.min.css';
// import headerImage from './img/home-bg.jpg';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

const headerImage = {
  backgroundImage: 'url(./img/home-bg.jpg)',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="index.html">Wence Cajucom</a>
            <button className="navbar-toggler navbar-toggler-right" 
            type="button" data-toggle="collapse" data-target="#navbarResponsive" 
            aria-controls="navbarResponsive" aria-expanded="false" 
            aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">Sample Post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- Page Header --> */}
        <header className="masthead" style={headerImage}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Wence Cajucom</h1>
                  <span className="subheading">Blah, blah, blah</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Main Content --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on September 24, 2019</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
                  </h2>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on September 18, 2019</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Science has not yet mastered prophecy
                  </h2>
                  <h3 className="post-subtitle">
                    We predict too much for the next year and yet far too little for the next ten.
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on August 24, 2019</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Failure is not an option
                  </h2>
                  <h3 className="post-subtitle">
                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.
                  </h3>
                </a>
                <p className="post-meta">Posted by
                  <a href="#">Start Bootstrap</a>
                  on July 8, 2019</p>
              </div>
              <hr />
              {/* <!-- Pager --> */}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* <!-- Footer --> */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                <p className="copyright text-muted">Copyright &copy; Wence Cajucom 2019</p>
              </div>
            </div>
          </div>
        </footer>

        {/* <!-- Bootstrap core JavaScript --> */}
        <script src="./vendor/jquery/jquery.min.js"></script>
        <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Custom scripts for this template --> */}
        <script src="./js/clean-blog.min.js"></script>


      </div>
    );
  }
}

export default App;
