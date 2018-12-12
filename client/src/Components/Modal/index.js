import React from 'react'
import './index.css'
import iconSuccess from '../../assets/icon/cart-success.svg'
import iconWarning from '../../assets/icon/cart-warning.svg'

const Modal = ({ title, message, iconType, classStyle }) => (
  <div id="modal" className={`modal ${classStyle}`}>
    <div className="modal-content">
      { 
        iconType === 'success' ?
        <img className="icon" src={iconSuccess} alt={iconType} /> :
        <img className="icon" src={iconWarning} alt={iconType} />
      }
      <h4 className="modal-title text-bold">{title}</h4>
      <p className="subtitle">{message}</p>
    </div>
  </div>
)

export default Modal