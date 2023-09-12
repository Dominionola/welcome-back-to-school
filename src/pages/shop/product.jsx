import React from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useConext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="descripion">
        <p>
          <b>{productName}</b>
        </p>
        <p>₦{price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
