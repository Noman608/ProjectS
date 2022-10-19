import React from "react";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Black Fujifilm Dslr Camera"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="2"
            title="Black Fujifilm Dslr Camera"
            price={20.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Black Fujifilm Dslr Camera"
            price={334.96}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="4"
            title="Black Fujifilm Dslr Camera"
            price={202.96}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="Black Fujifilm Dslr Camera"
            price={50.96}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Black Fujifilm Dslr Camera"
            price={770.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
