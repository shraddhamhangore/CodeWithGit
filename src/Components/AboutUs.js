import React from "react";
import { motion } from "framer-motion";
import mayurfurniturenews from "../Assets/mayurfurniturenews.mp4";
function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-container"
    >
      {/* Full-Width Video Section */}
      <motion.div
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="video-container"
      >
        <video
          src={mayurfurniturenews}
          controls
          loop
          className="video-player"
        ></video>
      </motion.div>

      {/* Content Section - Two Column Layout */}
      <div className="about-content-wrapper">
        {/* Left Column */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-content"
        >
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            Welcome to <strong>Mayur Furniture & Electronics</strong>, your
            trusted destination for premium furniture and home décor solutions
            in Kamti, Solapur. We are committed to offering high-quality,
            stylish, and durable furniture that enhances your living and working
            spaces.
          </p>
          <h2 className="about-subtitle">WHY CHOOSE US?</h2>
          <ul className="about-list">
            <li>
              ✅ Quality Assurance: Finest materials ensuring durability and
              style.
            </li>
            <li>
              💰 Affordable Prices: Premium furniture at competitive rates.
            </li>
            <li>
              🙌 Customer-Centric Approach: Your satisfaction is our priority.
            </li>
            <li>
              🌟 Exceptional Service: Friendly staff and a seamless buying
              experience.
            </li>
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-content"
        >
          <h2 className="about-subtitle">WHAT WE OFFER</h2>
          <ul className="about-list">
            <li>
              🛋️ Living Room Furniture: Sofas, coffee tables, TV units, and
              more.
            </li>
            <li>
              🛏️ Bedroom Solutions: Beds, wardrobes, dressers, and bedside
              tables.
            </li>
            <li>
              🍽️ Dining Sets: Elegant tables and chairs for every occasion.
            </li>
            <li>
              🏢 Office Furniture: Ergonomic chairs, desks, and storage
              solutions.
            </li>
            <li>
              🎨 Custom Designs: Tailor-made furniture to suit your specific
              requirements.
            </li>
          </ul>
          <div id="CU">
            <p className="about-text contact-info">
              <strong>📞 Contact Us</strong> today and let us help you create
              <br />
              spaces you'll love!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
