import React from 'react'
import './index.css'
import Button from '../../Components/Button'


const Footer = ({ cancellCheckOut, saveCheckOut }) => (
  <div className="l-footer">
    <Button type="cancell" handleClick={cancellCheckOut} name="cancelar" classStyle="primary"/>
    <Button type="save" handleClick={saveCheckOut} name="confirmar" classStyle="agree-button"/>
  </div>
)

export default Footer