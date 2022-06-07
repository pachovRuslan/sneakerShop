import React from 'react'
import { AppContext } from '../App';
const Info= ({image, title, description})=> {
  const { SetOnOpenCart } = React.useContext(AppContext);
    return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
    <img 
    className="mr-20" 
    width="120px" 
    src={image} 
    alt="empty-cart" />
    <h2>{title}</h2>
    <p className='opacity-6'>{description}</p>
    <button onClick={()=> SetOnOpenCart(false)} className='greenButton'>
      <img src='img/arrow.svg' alt="order" /> 
      Return              
    </button>
  </div>
  )
}

export default Info