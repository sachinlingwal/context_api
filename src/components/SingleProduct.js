import React, { useContext } from "react";
import { Cart } from "./Context";
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  const AddItemToCart = () => {
    setCart([...cart, prod]);
  };
  const removeItemFromCart = () => {
    setCart(cart.filter((c) => c.id !== prod.id));
  };

  return (
    <div>
      <img src={prod.image} alt={prod.name} width="100px" />
      <p>{prod.name}</p>
      <span> &#8377; {prod.price}</span>
      <br />

      {cart.includes(prod) ? (
        <button onClick={removeItemFromCart}>Remove from Cart</button>
      ) : (
        <button onClick={AddItemToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default SingleProduct;
