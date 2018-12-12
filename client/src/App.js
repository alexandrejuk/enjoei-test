import React, { Component } from 'react';
import './App.css';

import Header from './Containers/Header'
import Hero from './Containers/Hero'
import Content from './Containers/Content'
import Footer from './Containers/Footer'
import Modal from './Components/Modal'

import CheckoutService from './Services/checkout'

class App extends Component {

  state = { 
    checkout: {},
    product: {},
    coupon: 0,
    modal: {
      title: '',
      message: '',
      classStyle: '',
      iconType: '',
    }
  }
  modal = document.getElementById("modal")

  componentDidMount() {
    this.getCheckout()
    this.handleCloseModal()
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

  async handleSave() {
    await CheckoutService
      .saveCheckOut(this.state.checkout.id)
      .then(response => response.data)

    this.setState({ modal: { 
      title: 'compra confirmada',
      message: 'enviaremos atualizações sobre o pedido para o seu email',
      classStyle: 'openModal',
      iconType: 'success'
    }})
  }

  handleCloseModal = () => {
    const modal = { title: '', message: '', classStyle: '', iconType: '' }
    window.addEventListener('click', (event) => {
      if(event.target.id === 'modal') {
        this.setState({ modal })
      }
    })

    window.addEventListener('touchend', (event) => {
      if(event.target.id === 'modal') {
        this.setState({ modal })
      }
    })
  }
  handleSubmit =  (type) => {
    if(type === 'save') {
      return this.handleSave()
    }else {
     return this.setState({ modal: { 
        title: 'compra cancelada',
        message: 'o pedido não foi enviado e você não será cobrado',
        classStyle: 'openModal',
        iconType: 'warning'
      }})
    }
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
      <Footer cancellCheckOut={this.handleSubmit} saveCheckOut={this.handleSubmit}/>
      <Modal 
        classStyle={this.state.modal.classStyle} 
        title={this.state.modal.title} 
        message={this.state.modal.message} 
        iconType={this.state.modal.iconType}
      />
    </div>
    );
  }
}

export default App;
