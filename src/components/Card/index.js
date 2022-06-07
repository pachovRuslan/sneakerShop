import React from 'react'
import styles from './Card.module.scss';
import { AppContext } from '../../App';
function Card({
  id,
  title,
  imageUrl,
  price,
  onClickFavorit,
  onClickPlus,
  favorited = false,
}) {

  const { isItemAdded, isFavAdded } = React.useContext(AppContext);
  const [isFavorit, setIsFavorit] = React.useState(favorited);

  const onPlusAdded = () => {
    onClickPlus({ title, price, imageUrl, id });
  }

  const onFavoritAdded = () => {
    onClickFavorit({ title, price, imageUrl, id });

  }
  return (
    <div className={styles.card}>

      <div className={styles.favorite} onClick={onFavoritAdded}>
        {isFavAdded(id) ?
         <img src='img/liked.svg' alt="favOn"></img>
         :
         <img src='img/heart.svg' alt="favOff"></img>
        }</div>
      <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <div className={styles.plus} onClick={onPlusAdded} >
          {isItemAdded(id) ?
            <img src='img/btn-checked.svg' alt="addcart"></img>
            :
            <img src='img/btn-plus.svg' alt="plus"></img>
          }</div> </div>




    </div>
  )
}

export default Card