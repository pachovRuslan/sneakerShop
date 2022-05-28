import React from 'react'
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
    <div className="d-flex aligt-centr">
      <img width={40} height={40} src='img/logo.png' alt="logo" />
      <div >
        <h3 className="text-uppercase">REACT SNEAKERS</h3>
        <p className="opacity-5">best sneaker store</p>
      </div>
    </div>
    <div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p" >
        <img src='img/cart.svg' alt="cart"></img>

          <span> 105 $</span>
        </li>
        <li>
        <img src='img/user.svg' alt="user"></img>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header