import React from 'react'
import styles from './Card.module.scss';

 


function Card({onClickFavorit, onClickPlus,  imageUrl, title, price}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onPlusAdded = () => {
    onClickPlus({title, price, imageUrl});
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <button className="button" onClick={onClickFavorit}>
         <img src='img/heart.svg' alt="favoritOff"></img></button>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price} $</b>
        </div>

        <div className={styles.plus} onClick={onPlusAdded} >{isAdded ?
          <img src='img/btn-checked.svg' alt="addcart"></img>
          :
          <img src='img/btn-plus.svg' alt="plus"></img>
        }</div>

      </div>
    </div>
  )
}

export default Card