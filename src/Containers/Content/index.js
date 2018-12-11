import React from 'react'
import './index.css'

const Content = () => (
  <div className="l-content">
    <h3 className="title text-bold">cupons</h3>
    <ul className="l-coupons">
      <li>
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
          não usar cupom
        </label>
      </li>
      <li>   
        <label className="container">
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
          black friday
        </label>
        <span className="primary">- R$ 12,00</span>
      </li>
    </ul>

    <h3 className="title text-bold">resumo</h3>
    <ul className="l-order-detail">
      <li>valor original <span>R$ 100,00</span></li>
      <li>cupom <span className="primary">- R$ 12,00</span></li>
      <li>frete <span>R$ 20,00</span></li>
      <li>total  <span className="text-bold">R$ 108,00</span></li>
    </ul>

  </div>
)

export default Content