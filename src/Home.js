import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src="https://static.vecteezy.com/system/resources/previews/006/205/755/original/pakistan-village-day-off-cartoon-background-in-landscape-view-illustration-art-free-vector.jpg"/>

        <div className='home_row'>
            <Product 
            id = {1}
            title="10 Mini terracotta pots"
            price={1289.99} 
            image="https://m.media-amazon.com/images/I/61GMhrAq8qL._AC_SL1500_.jpg"
            rating={3}
            />
            <Product
            id = {2}
            title="Clay Pots Dining Set -The art of cooking explained"
            price={2099.00} 
            image="https://blog.kitchenwarehouse.com.au/wp-content/uploads/Blog-Image-The-Art-of-Cooking-in-Clay-Explained_1-min.jpg"
            rating={5}
            />
          
        </div>

        <div className='home_row'>
        <Product
            id = {3}
            title="Water Container"
            price={560.00} 
            image="https://m.media-amazon.com/images/I/61o0BlnwLXL._SL1500_.jpg"
            rating={4}
            />

        <Product
            id = {4}
            title="Clay Water Bottle(600ml)"
            price={499.03} 
            image="https://www.ecohoy.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/t/e/terracotta_water_bottle_1000ml_-1.jpg"
            rating={4}
            />

        <Product
            id = {5}
            title="Clay Glasses"
            price={240.00}
            image="https://5.imimg.com/data5/VJ/EW/MY-6440204/clay-water-glass-500x500.jpg"
            rating={4}
            />
        </div>

        <div className='home_row'>
        <Product
            id = {6}
            title="Handmade clay pots (village special)"
            price={1499.99} 
            image="https://static.toiimg.com/thumb/imgsize-23456,msid-88137086,width-600,resizemode-4/88137086.jpg"
            rating={4}
            />
        </div>

      </div>
    </div>
  )
}

export default Home
