import React from 'react'
import image1 from "../img/1.jpg";
import close from '../img/close.svg'
import order from '../img/order.svg'
function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
    <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">Cart
            <img className="removeBtn" src={close} alt="remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center">
              <img className="mr-20" width={70} height={60} src={image1} alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">Nike Blazer Mid Suede</p>
                <b>105 $</b>
              </div>
              <img className="removeBtn" src={close} alt="remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul >
              <li className="d-flex">
                <span>Total:</span>
                <div></div>
                <b>999$</b>
              </li>
              <li className="d-flex">
                <span>Tax 5%:</span>
                <div></div>
                <b>45$</b>
              </li>
            </ul>
            <button className="greenButton">Сheckout <img src={order} alt="order" /> </button>
          </div>
        </div>
        </div>
  )
}

export default Drawer