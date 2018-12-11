import React from 'react'
import './index.css'
import Button from '../../Components/Button'

const Footer = () => (
  <div className="l-footer">
    <Button name="cancelar" classStyle="primary"/>
    <Button name="confirmar" classStyle="agree-button"/>
  </div>
)

export default Footer