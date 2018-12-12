import React from 'react'
import './index.css'

const Button = ({ name, classStyle, handleClick, type }) => (
  <button onClick={()=> handleClick(type)} className={`button ${ classStyle }`}>{ name }</button>
)

export default Button