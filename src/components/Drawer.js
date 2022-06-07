import React from 'react'
import { AppContext } from '../App';
import Info from './Info'
import axios from 'axios';
import {useCart} from '../hooks/useCart'

function Drawer({ onCloseCart, onRemove, items = [] }) {
  const { setCartItems, isOrderComplete } = React.useContext(AppContext);
  const [cartItem, setIsOrderComplete] = React.useState(false);
  const [oredrId, setOredrId] = React.useState(null);
const {totalPrice} = useCart();

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post('https://62914776665ea71fe1437138.mockapi.io/orders', { items: cartItem });
      setOredrId(data.id)
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert('error(')
    };
  }
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Cart
          <img onClick={onCloseCart} className="cu-p" src='img/btn-remove.svg' alt="remove" />
        </h2>
        {
          items.length > 0 ? (
            <div className="d-flex flex-column flex">
              <div className="items">
                {items.map((obj) => (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20">
                    <img width={70} height={60} src={obj.imageUrl} alt="Sneakers" />
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} $</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src='img/btn-remove.svg'
                      alt="remove" />
                  </div>
                ))}
              </div>

              <div className="cartTotalBlock">
                <ul >
                  <li className="d-flex">
                    <span>Total:</span>
                    <div></div>
                    <b>{totalPrice}$</b>
                  </li>
                  <li className="d-flex">
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>{Math.round(totalPrice / 100 * 5)}$</b>
                  </li>
                </ul>
                <button onClick={onClickOrder} className="greenButton">
                  Сheckout <img src='img/arrow.svg' alt="order" />
                </button>
              </div>
            </div>
          ) : (
            <Info
              title={isOrderComplete ? "Order confirme " : "Empty cart"}
              image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
              description={isOrderComplete ? `Your order #${oredrId} will be delivered to courier soon` : "Add at least one pair of sneakers to place an order."}
            />
          )}


      </div>
    </div>

  )
}

export default Drawer