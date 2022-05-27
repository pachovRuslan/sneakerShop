import searchImg from './img/search.svg'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";

const arr=[
  {title:'Nike Blazer Mid Suede',
  price:99,
  image:image1,
},
{title:'Nike Air Max 270',
price:89,
image:image2,
},
{title:'Nike Blazer Mid Suede',
price:109,
image:image3,
},
{title:'Puma X Aka Boku Future Rider',
price:90,
image:image4,
}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 >All sneakers</h1>
          <div className="search-block d-flex">
            <img src={searchImg} alt="Search" />
            <input placeholder="search ... " />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj)=>
          (<Card title={obj.title} price={obj.price} imageUrl={obj.image} />))}
        </div>
      </div>
    </div>

  );
}

export default App;
