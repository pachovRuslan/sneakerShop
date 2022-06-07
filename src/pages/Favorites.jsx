import React from 'react'
import Card from '../components/Card'
import { AppContext } from '../App';
function Favorites({ items=[], onAddToCart}) {
 const {favorites, onAddToFavorit, isFavAdded} = React.useContext(AppContext);
 
  return (
    <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1 >Favorites</h1>
    </div>
    <div className="d-flex flex-wrap">
      {favorites.map((items, index) => (
        <Card
          key={index}
          favorited={true}
          onFavorite={onAddToFavorit}
             {...items}
          />
          ))}
    </div>
  </div> 
  )
}

export default Favorites