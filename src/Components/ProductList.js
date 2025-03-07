import React, { useState } from "react";
import { motion } from "framer-motion";

import armchair from "../Assets/armchair.avif";
import armsimprod1 from "../Assets/armsimprod1.avif";
import armsimprod2 from "../Assets/armsimprod2.jpg";
import armsimprod3 from "../Assets/armsimprod3.avif";
import Chair1 from "../Assets/Chair1.png";
import Chair2 from "../Assets/Chair2.png";
import Chair3 from "../Assets/Chair3.png";
import Chair4 from "../Assets/Chair4.png";
import Chair5 from "../Assets/Chair5.png";
import Chair6 from "../Assets/Chair6.png";
import Chair7 from "../Assets/Chair7.png";
import chair8 from "../Assets/chair8.png";
import Chair9 from "../Assets/Chair9.png";
import chairi from "../Assets/chairi.jpg";
import similar2 from "../Assets/similar2.avif";

import mbed from "../Assets/mbed.jpg";
import bedi from "../Assets/bedi.jpg";
import Bed from "../Assets/Bed.avif";
import SofaM from "../Assets/SofaM.jpg";
import SofaM1 from "../Assets/SofaM1.jpg";
import SofaM2 from "../Assets/SofaM2.jpg";
import skybluearmch from "../Assets/skybluearmch.jpg";
import SofaM3 from "../Assets/SofaM3.jpg";
import SofaM4 from "../Assets/SofaM4.jpg";

import mlamp from "../Assets/mlamp.jpg";
import msofa from "../Assets/msofa.avif";
import cofeetable from "../Assets/cofeetable.jpg";
import fridgei from "../Assets/fridgei.jpg";
import WashingMachine1 from "../Assets/WashingMachine1.jfif.jpg";
import brass from "../Assets/brass.jpg";
import diningi from "../Assets/diningi.jpg";
import sofai from "../Assets/sofai.avif";
import twu1 from "../Assets/twu1.avif";
import twu2 from "../Assets/twu2.avif";
import twu3 from "../Assets/twu3.avif";

import lampi from "../Assets/lampi.jpg";
import allfurniture from "../Assets/allfurniture.avif";
import bedandwadrobes from "../Assets/bedandwadrobes.jpg";
import sofaandtable from "../Assets/sofaandtable.jpg";
import lampandlight from "../Assets/lampandlight.avif";
import Couch from "../Assets/Couch.avif";
import sofaShop1 from "../Assets/sofaShop1.jpeg.jpg";
import Sofa1 from "../Assets/Sofa1.png";
import Sofa from "../Assets/Sofa.png";
import frontloadedwashingmachine from "../Assets/frontloadedwashingmachine.jpg";
import washingmachinei from "../Assets/washingmachinei.jpg";
import bluefridge from "../Assets/bluefridge.jpg";

import maroonfridge from "../Assets/maroonfridge.jpg";
import redfridge from "../Assets/redfridge.jpeg.jpg";

import ceilinglamp from "../Assets/ceilinglamp.avif";
import silverfridge from "../Assets/silverfridge.avif";
import Freez from "../Assets/Freez.avif";
import WoodenTable from "../Assets/WoodenTable.png";
import wadrobe44 from "../Assets/wadrobe44.jpeg.jpg";
import wadrobeshop from "../Assets/wadrobeshop.jpeg.jpg";

import wadrobeshop1 from "../Assets/wadrobeshop1.jpeg.jpg";
import wadrobeshop2 from "../Assets/wadrobeshop2.jpeg.jpg";
import wadrobeshop3 from "../Assets/wadrobeshop3.jpeg.jpg";
import wadrobeshop4 from "../Assets/wadrobeshop4.jpeg.jpg";
import dresing from "../Assets/dresing.jpeg.jpg";


import dresing1 from "../Assets/dresing1.jpg";
import dresing2 from "../Assets/dresing2.jpg";



import sarmchair from "../Assets/sarmchair.png";


import teapoy from "../Assets/teapoy.avif";

import SofaWithTea from "../Assets/SofaWithTea.jpg";


import d1 from "../Assets/d1.avif";
import d2 from "../Assets/d2.avif";
import d3 from "../Assets/d3.avif";
import d4 from "../Assets/d4.avif";
import d5 from "../Assets/d5.avif";
import d6 from "../Assets/d6.jpg";
import d7 from "../Assets/d7.jpg";
import d8 from "../Assets/d8.avif";
import MayurBed from "../Assets/MayurBed.jpg";
import MayurBed1 from "../Assets/MayurBed1.jpg";
import MayurBed4 from "../Assets/MayurBed4.avif";
import MayurBed3 from "../Assets/MayurBed3.avif";
import Refrigerator from "../Assets/Refrigerator.avif";
import Refrigerator1 from "../Assets/Refrigerator1.avif";
import Refrigerator2 from "../Assets/Refrigerator2.jpg";
import Refrigerator3 from "../Assets/Refrigerator3.jpg";
import WashingMachine4 from "../Assets/WashingMachine4.avif";
import WashingMachine2 from "../Assets/WashingMachine2.avif";
import WashingMachine3 from "../Assets/WashingMachine3.avif";
import LightLamp from "../Assets/LightLamp.jpg";
import LightLamp1 from "../Assets/LightLamp1.avif";
import LightLamp3 from "../Assets/LightLamp3.avif";
import LightLamp4 from "../Assets/LightLamp4.avif";
import LightLamp5 from "../Assets/LightLamp5.avif";
import DoubleBed from "../Assets/DoubleBed.jpg";
import DoubleBed1 from "../Assets/DoubleBed1.avif";
import DoubleBed2 from "../Assets/DoubleBed2.avif";
import DoubleBed4 from "../Assets/DoubleBed4.avif";
import DoubleBed3 from "../Assets/DoubleBed3.avif";
import StylishLamp from "../Assets/StylishLamp.avif";
import StylishLamp1 from "../Assets/StylishLamp1.avif";
import StylishLamp2 from "../Assets/StylishLamp2.jpg";
import StylishLamp3 from "../Assets/StylishLamp3.jpg";
import StylishLamp4 from "../Assets/StylishLamp4.avif";
import LuxurySofa from "../Assets/LuxurySofa.avif";
import LuxurySofa1 from "../Assets/LuxurySofa1.avif";
import LuxurySofa2 from "../Assets/LuxurySofa2.avif";
import LuxurySofa3 from "../Assets/LuxurySofa3.jpg";
import LuxurySofa4 from "../Assets/LuxurySofa4.jpg";
import LuxurySofa5 from "../Assets/LuxurySofa5.avif";
import LuxurySofa6 from "../Assets/LuxurySofa6.avif";
import CofeeTable3 from "../Assets/CofeeTable3.avif";
import CofeeTable from "../Assets/cofeetable.jpg";
import cofeetable1 from "../Assets/cofeetable1.avif";
import CofeeTable2 from "../Assets/cofeetable2.avif";
import CofeeTable4 from "../Assets/CofeeTable4.jpg";
import cofeetable6 from "../Assets/cofeetable6.jpg";
import CoffeeTable7 from "../Assets/CoffeeTable7.jpg";
import CoffeeTable9 from "../Assets/CoffeeTable9.jpg";
import CofeeTable8 from "../Assets/CoffeeTable8.jpg";
// import cofeetable6 from "../Assets/cofeetable6.jpg";


import r1 from "../Assets/r1.avif";
import r2 from "../Assets/r2.jpg";
import r3 from "../Assets/r3.jpg";
import r4 from "../Assets/r4.jpg";
import r5 from "../Assets/r5.avif";
import r6 from "../Assets/r6.jpg";



import w1 from "../Assets/w1.jpg";
import W2 from "../Assets/w2.avif";
import W3 from "../Assets/W3.avif";
import W4 from "../Assets/W4.avif";
import W5 from "../Assets/W5.avif";


import B2 from "../Assets/B2.jpg";
import B1 from "../Assets/B1.jpg";
import B3 from "../Assets/B3.jpg";
import B4 from "../Assets/B4.jpg";
import B5 from "../Assets/B5.avif";
import { img } from "framer-motion/client";



const ProductList = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
    // const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
   
  const categories = [
    { id: 1, name: "Luxury Sofa", image: sofai },
    { id: 2, name: "Dining Table", image: diningi },
    { id: 3, name: "Office Chair", image: chairi },
    { id: 4, name: "Bed", image: bedi },
    { id: 5, name: "Freez", image: fridgei },
    { id: 6, name: "Washing Machine", image: washingmachinei },
    { id: 7, name: "Lamp and Lighting", image: lampi },
  ];



  const newProducts = [
    { id: 1, name: "Luxe Armchair", image: armchair },
    { id: 2, name: "Queen Bed", image: mbed },
    { id: 3, name: "Stylish Lamp", image: mlamp },
    { id: 4, name: "Luxury Sofa", image: msofa },
    { id: 5, name: "Coffee Table", image: cofeetable },
    { id: 6, name: "Smart Fridge", image: Freez },
    { id: 7, name: "Washing Machine", image: WashingMachine1 },
    { id: 8, name: "Brass Decor", image: brass },
  ];

  const relatedCategory = {
    1: [
      { id: "sofa1", name: "Sofa Set", img: Sofa1 },
      { id: "SofaM", name: "Sofa Set", img: SofaM },
      { id: "SofaM1", name: "Sofa Set", img: SofaM1 },
      { id: "SofaM2", name: "Sofa Set", img: SofaM2 },
      { id: "Sofa", name: "Sofa Set", img: Sofa },
      { id: "sofaandtable", name: "Sofa & Table", img: sofaandtable },
      { id: " skybluearmch ", name: "Sofa & Table", img: skybluearmch },
      { id: " SofaM3 ", name: "Sofa & Table", img: SofaM3 },
      { id: " SofaM4 ", name: "Sofa & Table", img: SofaM4 },
    ],
    2: [
      { id: "d1", name: "Dining Table", img: d1 },
      { id: "d2", name: "Dining Table", img: d2 },
      { id: "d3", name: "Dining Table", img: d3 },
      { id: "d4", name: "Dining Table", img: d4 },
      { id: "d5", name: "Dining Table", img: d5 },
      { id: "d6", name: "Dining Table", img: d6 },
      { id: "d7", name: "Dining Table", img: d7 },
      { id: "d8", name: "Dining Table", img: d8 },
    ],

    3: [
      { id: "armsimprod1", name: "chair", img: armsimprod1 },
      { id: "armsimprod2", name: "chair", img: armsimprod2 },
      { id: "armsimprod3", name: "chair", img: armsimprod3 },
      { id: "Chair1", name: "Chair", img: Chair1 },
      { id: "Chair2", name: "chair", img: Chair2 },
      { id: "Chair3", name: "chair", img: Chair3 },
      { id: "Chair4", name: "chair", img: Chair4 },
      { id: "Chair5", name: "chair", img: Chair5 },
      { id: "Chair6", name: "chair", img: Chair6 },
    ],

    4: [
      { id: "mbed", name: "Double Bed", img: mbed },
      { id: "Bed", name: "Double Bed", img: Bed },
      { id: "Bed", name: "Double Bed", img: MayurBed },
      { id: "Bed", name: "Double Bed", img: MayurBed1 },
      { id: "Bed", name: "Double Bed", img: MayurBed3 },
      { id: "Bed", name: "Double Bed", img: MayurBed4 },
    ],
    5: [
      { id: "bluefridge", name: "bluefridge", img: bluefridge },
      { id: "maroonfridge", name: "maroonfridge", img: maroonfridge },
      { id: "redfridge", name: "redfridge", img: redfridge },
      { id: "silverfridge", name: "fridge", img: silverfridge },
      { id: "Refrigerator", name: "fridge", img: Refrigerator },
      { id: "Refrigerator", name: "fridge", img: Refrigerator1 },
      { id: "Refrigerator", name: "fridge", img: Refrigerator2 },
      { id: "Refrigerator", name: "fridge", img: Refrigerator3 },
    ],
    6: [
      { id: "WashingMachine1", name: "WashingMachine", img: WashingMachine1 },
      {
        id: "frontloadedwashingmachine",
        name: "WashingMachine",
        img: frontloadedwashingmachine,
      },
      { id: "WashingMachine2", name: "WashingMachine", img: WashingMachine2 },
      { id: "WashingMachine3", name: "WashingMachine", img: WashingMachine3 },
      { id: "WashingMachine4", name: "WashingMachine", img: WashingMachine4 },
    ],
    7: [
      { id: "mlamp", name: "Lamp", img: mlamp },
      { id: "lampandlight", name: "Lamp", img: lampandlight },
      { id: "ceilinglamp", name: "ceilinglamp", img: ceilinglamp },
      { id: "lampandlight", name: "Lamp", img: LightLamp },
      { id: "lampandlight", name: "Lamp", img: LightLamp1 },
      { id: "lampandlight", name: "Lamp", img: LightLamp3 },
      { id: "lampandlight", name: "Lamp", img: LightLamp4 },
      { id: "lampandlight", name: "Lamp", img: LightLamp5 },
    ],
  };


  const relatedProducts = {
    1: [
      { img: armchair },
      { img: armsimprod1 },
      { img: armsimprod2 },
      { img: armsimprod3 },
      { img: Chair1 },
      { img: Chair2 },
      { img: Chair3 },
      { img: Chair4 },
      { img: Chair5 },
      { img: Chair6 },
      { img: Chair7 },
      { img: chair8 },
      { img: similar2 },
      { img: twu1 },
      { img: twu2 },
    ],
    2: [
      { img: mbed },
      { img: Bed },
      { img: bedandwadrobes },
      { img: DoubleBed },
    ],
    2: [
      { img: mbed },
      { img: Bed },
      { img: bedandwadrobes },
      { img: DoubleBed },
      { img: DoubleBed1 },
      { img: DoubleBed2 },
      { img: DoubleBed3 },
      { img: DoubleBed4 },
    ],
    3: [
      { img: mlamp },
      { img: StylishLamp },
      { img: StylishLamp1 },
      { img: StylishLamp2 },
      { img: StylishLamp3 },
      { img: StylishLamp4 },
    ],
    4: [
      { img: LuxurySofa },
      { img: LuxurySofa1 },
      { img: LuxurySofa2 },
      { img: LuxurySofa3 },
      { img: LuxurySofa4 },
      { img: LuxurySofa5 },
      { img: LuxurySofa6 },
    ],
    5: [
      { img: cofeetable },
      { img: teapoy },
      { img: cofeetable1 },
      { img: CofeeTable2 },
      { img: CofeeTable3 },
      { img: CofeeTable4 },
      { img: CoffeeTable7 },
      { img: cofeetable6 },
      { img: CoffeeTable9 },
      { img: CofeeTable8 },
    ],
    6: [
      { img: r1 },
      { img: r2 },
      { img: r3 },
      { img: r4 },
      { img: r5 },
      { img: r6 },
    ],
    7: [{ img: w1 }, { img: W2 }, { img: W3 }, { img: W4 }, { img: W5 }],

    // { img:W2 },
    8: [
      { img: B1 },
      { img: B2 },
      { img: B3 },
      { img: B4 },
      { img: B5 },
      
    ],
  };

  const handleProductClick = (id) => {
    setSelectedProducts(relatedProducts[id] || []);
  };

  const handleCategoryClick = (id) => {
    setSelectedCategory(relatedCategory[id] || []);
  };


  return (
    <div className="product-container">
      <h1 className="creative-heading">OUR CREATIVE COLLECTION</h1>

      <div className="chair">
        <img
          src={allfurniture}
          alt="All Furniture"
          className="imgAllFurniture"
        />
      </div>

      <h2 className="shop-category">Shop by Category</h2>

      <div id="Category-grid">
        {categories.map((Category) => (
          <motion.div
            key={Category.id}
            className="product-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(Category.id)}
          >
            <img
              src={Category.image}
              alt={Category.name}
              onClick={() => setSelectedImage()}
            />
            <h3>{Category.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* {selectedCategory.length > 0 && (
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="relatedCategory-grid">
            {selectedCategory.map((icon, index) => (
              <motion.div
                key={index}
                className="related-card"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <img
                  src={icon.img}
                  alt="Related Product"
                  className="fixed-size"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )} */}

      {selectedCategory.length > 0 && (
        <div className="related-products">
          <h3 id="relatedheading">Related Products</h3>
          <div id="relatedCategory-grid">
            {selectedCategory.map((icon, index) => (
              <motion.div
                key={index}
                className="related-card"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <img src={icon.img} alt={icon.name} className="fixed-size" />
                <h4>{icon.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <h2 className="new-collection">Our New Collection</h2>

      <div className="product-grid">
        {newProducts.map((product) => (
          <motion.div
            key={product.id}
            className="product-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </motion.div>
        ))}
      </div>

      {selectedProducts.length > 0 && (
        <div className="related-products">
          <h3 id="relatedheading">Related Products</h3>
          <div className="related-grid">
            {selectedProducts.map((item, index) => (
              <motion.div
                key={index}
                className="related-card"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <img
                  src={item.img}
                  alt="Related Product"
                  className="fixed-size"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
