import React, { Component } from 'react';
import './App.css';

import Header from './Containers/Header'
import Hero from './Containers/Hero'
import Content from './Containers/Content'
import Footer from './Containers/Footer'

class App extends Component {
  render() {
    return (
      <div className="l-main">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
    );
  }
}

export default App;
