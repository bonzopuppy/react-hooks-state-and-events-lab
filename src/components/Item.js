import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);


  function updateCart() {
    setInCart((prevState) => !prevState);
  }

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  const liClass = inCart ? "in-cart" : ""

  const buttonClass = inCart ? "remove" : "add"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={updateCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
