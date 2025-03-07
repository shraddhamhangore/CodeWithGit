import React from "react";
import "../OurProduct.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
