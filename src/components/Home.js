import React, { useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
faker.seed(100);

const Home = (props) => {
  const { cart, setCart } = props;
  //   const [cart, setCart] = useState([]);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div>
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          cart={cart}
          setCart={setCart}
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
