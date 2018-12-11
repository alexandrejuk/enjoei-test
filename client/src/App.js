import React, { Component } from 'react';
import './App.css';

import Header from './Containers/Header'
import Hero from './Containers/Hero'
import Content from './Containers/Content'
import Footer from './Containers/Footer'

import CheckoutService from './Services/checkout'

class App extends Component {

  state = { 
    checkout: {},
    product: {},
  }

  componentDidMount() {
    this.getCheckout()
  }

  async getCheckout() {
    const id = '6544'
    const { product, checkout } = await CheckoutService.getCheckOutById(id)
      .then(response => response.data)

    this.setState({ checkout, product })
    console.log(checkout)
  }

  render() {
    return (
      <div className="l-main">
      <Header />
      <Hero productImage={this.state.product.image}/>
      <Content productPrice={this.state.product.price} checkout={this.state.checkout}/>
      <Footer />
    </div>
    );
  }
}

export default App;
