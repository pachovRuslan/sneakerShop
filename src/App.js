import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Drawer from './components/Drawer';

import Home from './pages/Home'
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [onOpenCart, SetOnOpenCart] = React.useState(false);
  const [isLoading, SetIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const favoritResponce = await axios.get('https://62914776665ea71fe1437138.mockapi.io/favorit');
      const cartResponce = await axios.get('https://62914776665ea71fe1437138.mockapi.io/cart');
      const itemsResponce = await axios.get('https://62914776665ea71fe1437138.mockapi.io/items');

      SetIsLoading(false);

      setItems(itemsResponce.data);
      setCartItems(cartResponce.data);
      setFavorites(favoritResponce.data);
    }
    fetchData();

  }, []);
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62914776665ea71fe1437138.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://62914776665ea71fe1437138.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://62914776665ea71fe1437138.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((items) => items.id !== id));
  };
  const onAddToFavorit = (obj) => {
    if (favorites.find((favObj) =>  favObj.id === obj.id)) {
      axios.delete(`https://62914776665ea71fe1437138.mockapi.io/favorit/${obj.id}`);
      setFavorites((prev) => prev.filter((items) => items.id !== obj.id));
    } else {
      axios.post('https://62914776665ea71fe1437138.mockapi.io/favorit', obj);
      setFavorites((prev) => [...prev, obj]);
    }

  }
  const onChangeSearchInput = (event) => {

    setSearchValue(event.target.value);
  }
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }
  const isFavAdded = (id) => {
    return favorites.some((obj) => Number(obj.id) === Number(id));
  }
  return (
    <AppContext.Provider value={{ setCartItems,cartItems, favorites, items, isItemAdded, isFavAdded, SetOnOpenCart }}>
      <div className="wrapper clear">
        {onOpenCart && <Drawer items={cartItems} onCloseCart={() => SetOnOpenCart(false)} onRemove={onRemoveItem} />}

        <Header onClickCart={() => SetOnOpenCart(true)} />
        <Routes>
          <Route exact path='/'
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorit={onAddToFavorit}
                cartItems={cartItems}
                favorites={favorites}
                isLoading={isLoading} />
            } />
          <Route exact path='/favorites'
            element={
              <Favorites/>
            } />
        
        <Route exact path='/orders'
            element={
              <Orders/>
            } />
        </Routes>
        
      </div>
    </AppContext.Provider>
  );
}

export default App;
