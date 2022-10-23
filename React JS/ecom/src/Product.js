import React from 'react'
import "./Product.css"
const Product = () => {
  return (
    <div>
         <div className="product">
            <div className='product__info'>
                <p>iusdgfvbc wsauge us hgefuuofhgroshgos suehgfdusaefudihas shdfhsoifedsA soefdho</p>
                <p className="product__price">
                  <small>$</small>
                  <strong>30</strong>
                </p>
                <div className="product__rating">⭐⭐</div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" />
            <button>Add to basket</button>
         </div>
    </div>
  )
}

export default Product
