import React from 'react'
function Drawer({onCloseCart, items=[]}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Cart
          <img onClick={onCloseCart} className="cu-p" src='img/btn-remove.svg' alt="remove" />
        </h2>
        <div className="items">
        {items.map((obj)=>(
            <div className="cartItem d-flex align-center mb-20">
            <img className="mr-20" width={70} height={60} src={obj.imageUrl} alt="Sneakers" />
            <div className="mr-20" flex>
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price} $</b>
            </div>
            <img className="removeBtn" src='img/btn-remove.svg' alt="remove" />
          </div>
        ))}
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
          <button className="greenButton">Сheckout <img src='img/arrow.svg' alt="order" /> </button>
        </div>
      </div>
    </div>
   
  )
}

export default Drawer