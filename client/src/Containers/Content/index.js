import React from 'react'
import './index.css'

const Content = ({ productPrice, checkout, onClick, coupon }) => (
  <div className="l-content">
    <h3 className="title text-bold">cupons</h3>
    <ul className="l-coupons">
      <li>
        <label className="container" >
          <input type="radio" name="radio" onClick={() => onClick(null)}/>
          <span className="checkmark"></span>
          não usar cupom
        </label>
      </li>
      {
        checkout && checkout.availableCoupons ? 
        checkout.availableCoupons.map(coupon => 
        <li key={coupon.id} >   
          <label className="container">
            <input type="radio" name="radio" onClick={() => onClick(coupon.id)}/>
            <span className="checkmark"></span>
            {coupon.title}
          </label>
          <span className="primary">- R$ {coupon.discount},00</span>
        </li>
        ) :
        ''
      } 
    </ul>

    <h3 className="title text-bold">resumo</h3>
    <ul className="l-order-detail">
      <li>valor original <span>R$ { productPrice },00</span></li>
      <li>cupom 
        { 
          coupon > 0 ? 
          <span className="primary">- R$ {coupon},00</span> : 
          <span> R$ {coupon},00</span>
        }
      </li>
      <li>frete <span>R$ { checkout.shippingPrice },00</span></li>
      <li>total  <span className="text-bold">R$ { checkout.totalPrice },00</span></li>
    </ul>

  </div>
)

export default Content