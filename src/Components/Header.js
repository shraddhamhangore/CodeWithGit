import React, { useState } from 'react';
import image from '../Assets/image.png';
import Homeimg from "../Assets/Homeimg.png";
import chairIcon from "../Assets/ChairIcon.png";

import Mixer from "../Assets/Mixer.png";
 import Sofa from "../Assets/Sofa.png";
 import Almari from "../Assets/Almari.png";
 import Freez from "../Assets/Freez.png";
import SofaWithTea from "../Assets/SofaWithTea.png";
import Bed from "../Assets/Bed.png";
import Couch from "../Assets/Couch.png";
import Sofa1 from "../Assets/Sofa1.png";
import WoodenTable from "../Assets/WoodenTable.png";
import MayurShop from "../Assets/MayurShop.jpg";
import CEO1 from "../Assets/CEO1.avif";
import CEO2 from "../Assets/CEO2.avif";
import CEO3 from "../Assets/CEO3.avif";
import ChairStill from "../Assets/ChairStill.jpg";
import chair1 from "../Assets/Chair1.png";
import chair2 from "../Assets/Chair2.png";
import chair3 from "../Assets/Chair3.png";
import chair4 from "../Assets/Chair4.png";
import chair5 from "../Assets/Chair5.png";
import chair6 from "../Assets/Chair6.png";
import chair7 from "../Assets/Chair7.png";
import ChairWithPillow from "../Assets/ChairWithPillow.avif";
import ChairWithPillow1 from "../Assets/ChairWithPillow1.avif";
import ChairTable from "../Assets/ChairTable.png";
import girl from "../Assets/girl.jpg";
import img from "../Assets/img.jpg";
import img3 from "../Assets/img3.jpg";
import img2 from "../Assets/img2.jpg";
import ModernChair6 from "../Assets/ModernChair6.jpg";
import ModernChair from "../Assets/ModernChair.avif";
import Exp from "../Assets/Exp.jpg";
import { Link } from 'react-router-dom';


function Header() {

  const images = [
    Mixer,
    Sofa,
    Almari,
    Freez,
    SofaWithTea,
    Bed,
    Couch,
    Sofa1,
    WoodenTable,
  ];

const Chairs = [chair1, chair2, chair3, chair4, chair5, chair6, chair7,img, img2,img3];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [mainImage, setMainImage] = useState([0]); // Default main image


   const [mainImage, setMainImage] = useState(ChairStill);
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 4; // Number of images to show at once

  const handlePrev = () => {
    // setStartIndex((prevIndex) =>
    //   prevIndex === 0 ? Chairs.length - visibleImages : prevIndex - 1
    // );
     setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    // setStartIndex((prevIndex) =>
    //   prevIndex >= Chairs.length - visibleImages ? 0 : prevIndex + 1
    // );

    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, Chairs.length - visibleImages)
    );
  };

    const handleImageClick = (newImage) => {
      setMainImage(newImage); // Update the left-side image
    };



  return (
    <>
      <div>
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <div className="nav">
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/AboutUs" className="about">
                About Us
              </a>
            </li>
            <li>
              <a href="/OurProducts">Our Products</a>
            </li>
            <li>
              <a href="/ContactUs">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="heading">
            MAYUR FURNITURE <span className="and">&</span> ELECTRONICS{" "}
          </h6>
          <p className="para">
            We believe that choosing furniture & home appliances is more than
            just functional pieces; it's a reflection of your style, taste, and
            personality.
          </p>
        </div>

        <div className="home-section relative">
          <div className="home-section relative">
            <div className="Home-img">
              <img src={Homeimg} alt="furniture" className="w-full" />
              <button className="shop-now-btn absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <img src={chairIcon} alt="Chair Icon" className="icon" />
                Shop Now
                {/* <span className="arrow">→➜</span> */}
                <span className="arrow">➜</span>
              </button>
            </div>
          </div>
        </div>

        <div className="scrolling-container">
          <div className="scrolling-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt={`image-${index}`} />
            ))}
          </div>
        </div>

        <div class="line-text">
          <h1 className="text">WE ARE</h1>
          <div class="line"></div>
          <img src={image} alt="Mayur Logo" />
        </div>

        <div class="content-container">
          <img src={MayurShop} alt="Shop" className="shop" />
          <p>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance.
          </p>
        </div>

        <div class="line-text2">
          <div class="line"></div>
          <h3 className="text2">Meet Our CEO's</h3>
          <img src={CEO1} alt="cEO photo" className="pic" />
          <img src={CEO2} alt="cEO photo" className="pic" />
          <img src={CEO3} alt="cEO photo" className="pic" />
        </div>

        <div className="scrolling-container">
          <div className="scrolling-track">
            {images.concat(images).map((img, index) => (
              <img key={index} src={img} alt={`image-${index}`} />
            ))}
          </div>
        </div>

        <div>
          <div className="line-text3">
            <h3 className="text3">SEE WHAT WE HAVE FOR YOU</h3>
            <div className="line"></div>
          </div>

          <div className="shop-content">
            {/* Left-side main image */}
            <img src={mainImage} alt="Shop" className="shop-image" />
            <div className="shop-details">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages.
              </p>
              <button className="shop-now-button">
                <a href="/OurProducts">Shop Now →</a>
              </button>
            </div>
          </div>

          <div className="carousel flex items-center gap-4 p-4">
            {/* Previous Button */}
            <button
              className="carousel-btn p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
              onClick={handlePrev}
            >
              ←
            </button>

            {/* Image Container */}
            <div className="carousel-images flex gap-2 overflow-hidden border-2 border-gray-300 rounded-lg p-2 w-[620px]">
              {Chairs.slice(startIndex, startIndex + visibleImages).map(
                (chair, index) => (
                  <img
                    key={index}
                    src={chair}
                    alt={`Chair ${index + 1}`}
                    className="w-36 h-24 object-cover rounded-md cursor-pointer transition-transform hover:scale-110"
                    onClick={() => handleImageClick(chair)} // Click event to update the main image
                  />
                )
              )}
            </div>

            {/* Next Button */}
            <button
              className="carousel-btn p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>







        <div className="explore-more-container">
          <img
            src={Exp}
            alt="Explore More Background"
            class="explore-more-bg"
          />
          <div class="explore-more-content">
            <button class="explore-more-btn">
              <a href="/OurProducts">
                {" "}
                EXPLORE MORE <span class="arrow">→</span>
              </a>
            </button>
          </div>
        </div>





        

        <div className="container">
          {/* Top Section */}
          <div className="section grid">
            <div className="text-content1">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
            </div>
            <div className="image-container">
              <img src={ModernChair} alt="Chair" className="image1" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="section grid">
            <div className="image-container">
              <div className="image-wrapper">
                <img src={ModernChair6} alt="Chair" className="image2" />
                <h1 className="overlay-text">TALK WITH US</h1>
                {/* Button Positioned on Image2 */}
                <div className="button-container">
                  <button className="button">
                    <img src={girl} alt="User" className="user-image" />
                    <h4>Let's Discuss Deal →</h4>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-content2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header


