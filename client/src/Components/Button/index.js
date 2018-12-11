import React from 'react'
import './index.css'

const Button = ({ name, classStyle }) => (
  <button className={`button ${ classStyle }`}>{ name }</button>
)

export default Button