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
    coupon: 0,
  }

  componentDidMount() {
    this.getCheckout()
  }

  async getCheckout() {
    const id = '6544'
    const { product, checkout } = await CheckoutService.getCheckOutById(id)
      .then(response => response.data)

    this.setState({ checkout, product, coupon: 0 })
  }

  async updatedTotalPriceCheckout(couponId) {
    const id = '6544'
    const { product, checkout } = await CheckoutService.updateTotalPriceCheckOutById(id, { couponId })
      .then(response => response.data)
    const { discount } = checkout.availableCoupons.find(c => c.id === couponId)
    this.setState({ checkout, product, coupon: discount })
  }

  handleSelectCoupon = (couponId) => {
    if(!couponId) {
      return this.getCheckout()
    }
    return this.updatedTotalPriceCheckout(couponId)
  }

  render() {
    return (
      <div className="l-main">
      <Header />
      <Hero productImage={this.state.product.image}/>
      <Content 
        onClick={this.handleSelectCoupon} 
        productPrice={this.state.product.price} 
        checkout={this.state.checkout}
        coupon={this.state.coupon}
      />
      <Footer />
    </div>
    );
  }
}

export default App;
