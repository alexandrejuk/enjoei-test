import React from 'react'
import './index.css'

const Hero = ({ productImage }) => (
  <div className="l-hero">
    <img 
      className="l-product" 
      src={productImage}
      alt="product-item"
      />
  </div>
)

export default Hero