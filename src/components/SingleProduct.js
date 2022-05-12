import React from "react";
const SingleProduct = ({ prod, cart, setCart }) => {
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
