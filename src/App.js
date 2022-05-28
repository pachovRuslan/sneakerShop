import React from 'react';
import Card from './components/Card/'
import Header from './components/Header'
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([ ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [onOpenCart, SetOnOpenCart] = React.useState(false);
  React.useEffect (()=>{
    fetch ('https://62914776665ea71fe1437138.mockapi.io/items').then(res => {
      return res.json();
    }).then(json=>{
      setItems(json);
    }) ;
  }, []);
 const onAddToCart =(obj)=>
 {
  setCartItems(prev=>[...prev,obj]);
 }
console.log(cartItems)
  return (
    <div className="wrapper clear">
     {onOpenCart && <Drawer items={cartItems} onCloseCart={()=> SetOnOpenCart(false) }/>}
      <Header onClickCart={()=> SetOnOpenCart(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src='/img/search.svg' alt="Search" />
            <input placeholder="search ... " />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((items, index)=>(
          <Card 
          key={index}
          title={items.title}
           price={items.price} 
           imageUrl={items.image} 
           onClickPlus={(obj)=>onAddToCart(obj)} 
           onClickFavorit={()=>console.log('add favorit')} />))}
        </div> 
      </div>
    </div>

  );
}

export default App;
