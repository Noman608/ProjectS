import React from "react";
import "./CheckputProduct.css";
const CheckputProduct = () => {
  return (
    <div className="checkoutProduct">
       <img src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" alt="product-img" />
        <div className="product__info">
            <p className="checkoutProduct__title">
            Black Fujifilm Dslr Camera
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <div className="checkoutProduct__rating">
                     ⭐⭐
            </div>
            <button>Remove From Basket</button>
        </div>
    </div>
  );
};

export default CheckputProduct;
