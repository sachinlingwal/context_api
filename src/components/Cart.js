import React, { useContext, useEffect, useState } from "react";
import { Cart } from "./Context";
import SingleProduct from "./SingleProduct";

const CartPage = (props) => {
  // const { cart, setCart } = props;
  const [total, setTotal] = useState();
  const { cart, setCart } = useContext(Cart);

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
            // cart={cart}
            // setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
