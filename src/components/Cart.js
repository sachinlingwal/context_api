import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = (props) => {
  const { cart, setCart } = props;
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span>MY Cart </span>
      <br />
      <span>Total : &#x20B9; {total}</span>
      <div>
        {" "}
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
