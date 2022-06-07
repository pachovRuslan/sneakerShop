import Card from '../components/Card/'
import React from 'react'
import { AppContext } from '../App';


function Home({ searchValue, setSearchValue, onChangeSearchInput, items, onAddToCart, onAddToFavorit, added}) {
  const {isItemAdded} = React.useContext(AppContext);
  const renderItems=()=>{
return  items
  .filter((items) => items.title.toLowerCase().includes(searchValue))
  .map((items, index) => (
    <Card
      id={items.id}
      key={index}
      title={items.title}
      price={items.price}
      imageUrl={items.image}
      onClickPlus={(obj) => onAddToCart(obj)}
      onClickFavorit={(obj) => onAddToFavorit(obj)} 
      added={isItemAdded(items.id)}
      loading={false}
      />))

  };
  return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >{searchValue ? `Search by request:"${searchValue}"` : 'All sneakers'}</h1>
          <div className="search-block d-flex">
            <img src='/img/search.svg' alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src='img/btn-remove.svg'
                alt="clear"
              />
            )} <input onChange={onChangeSearchInput} value={searchValue} placeholder="search ... " />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {renderItems()}
         
        </div>
      </div>
  )
}

export default Home