import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blue from "../Assets/blue.png";
import green from "../Assets/green.png";
import oceangreen from "../Assets/oceangreen.PNG";
import sarmchair from "../Assets/sarmchair.png";
import leftsidearm from "../Assets/leftsidearm.jpg";
import rightsidearm from "../Assets/rightsidearm.PNG";
import armsimprod1 from "../Assets/armsimprod1.avif";
import armsimprod2 from "../Assets/armsimprod2.jpg";
import armsimprod3 from "../Assets/armsimprod3.avif";


const products = [
  {
    id: 1,
    name: "Luxe Armchair",
    description: (
      <>
        <p>
          Upgrade your living space with the <strong>Luxe Armchair</strong>, a
          perfect blend of comfort and elegance. Upholstered in premium{" "}
          <strong>velvet fabric</strong>, this armchair features a plush
          cushioned seat and a gently curved backrest for optimal support. The
          sleek <strong>gold or wooden legs</strong> add a modern touch, making
          it a stylish addition to any space.
        </p>
        <h3>✨ Features:</h3>
        <ul>
          <li>✔ Soft, high-density foam cushioning</li>
          <li>✔ Luxurious fabric with a rich texture</li>
          <li>✔ Sturdy frame with durable legs</li>
          <li>✔ Ergonomic design for relaxation</li>
          <li>✔ Perfect for living rooms, lounges, or offices</li>
        </ul>
        <h3>👕 Dimensions:</h3>
        <ul>
          <li>
            <strong>Height:</strong> 35 inches
          </li>
          <li>
            <strong>Width:</strong> 28 inches
          </li>
          <li>
            <strong>Depth:</strong> 30 inches
          </li>
        </ul>
      </>
    ),
    colors: [
      { name: "Blue", image: blue, colorCode: "#0000FF" },
      { name: "Green", image: green, colorCode: "#008000" },
      { name: "Oceangreen", image: oceangreen, colorCode: "#4CA984" },
    ],
    similarImages: [armsimprod1, armsimprod2, armsimprod3],
    smallImage: sarmchair,
    sideImage: leftsidearm,
    sideImage1: rightsidearm,
  },
];

const Viewproduct1 = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product.colors[0].image);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="view-product">
      <div className="product-main">
        <div className="zoom-container">
          <img src={selectedImage} alt={product.name} className="main-image" />
        </div>

        <div className="color-options">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className="color-circle"
              style={{ backgroundColor: color.colorCode }}
              onClick={() => setSelectedImage(color.image)}
              title={color.name}
            ></button>
          ))}
        </div>
      </div>

      <div className="right-column">
        {product.smallImage && (
          <img
            src={product.smallImage}
            alt="Small View"
            className="side-image"
          />
        )}
        {product.sideImage && (
          <img
            src={product.sideImage}
            alt="Left Side View"
            className="side-image"
          />
        )}
        {product.sideImage1 && (
          <img
            src={product.sideImage1}
            alt="Right Side View"
            className="side-image"
          />
        )}
      </div>

      <div className="right-side">
        <h2>{product.name}</h2>
        <div className="product-description">{product.description}</div>
        <button className="card-button1">Add to Cart</button>
        <button className="card-button1">Buy Now</button>
      </div>

      <div className="similar-products">
        <h3>🔹 Similar Products</h3>
        <div className="similar-images">
          {product.similarImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Similar Product ${index + 1}`}
              className="similar-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewproduct1;
