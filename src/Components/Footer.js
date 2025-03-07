import React from "react";
import {
  FaPinterest,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          {/* Shop Furniture */}
          <div className="footer-section">
            <h4>Shop Furniture</h4>
            <ul>
              <li>
                <a href="/OurProducts">Sofas & Seating</a>
              </li>
              <li>
                <a href="/OurProducts">Beds & Mattresses</a>
              </li>
              <li>
                <a href="/OurProducts">Dining Tables</a>
              </li>
              <li>
                <a href="/OurProducts">Wardrobes & Storage</a>
              </li>
              <li>
                <a href="/OurProducts">Office Furniture</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="/AboutUs">Our Story</a>
              </li>
              <li>
                <a href="/AboutUs">Why Choose Us?</a>
              </li>
              <li>
                <a href="/customer-reviews">Customer Reviews</a>
              </li>
              <li>
                <a href="/quality-assurance ">Quality Assurance</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="footer-section">
            <h4>Customer Support</h4>
            <ul>
              <li>
                <a href="/ContactUs">Contact Us</a>
              </li>
              <li>
                <a href="/shipping-delivery">Shipping & Delivery</a>
              </li>
              <li>
                <a href="/return-policy">Return Policy</a>
              </li>
              <li>
                <a href="/warranty-information">Warranty Information</a>
              </li>
             
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-section social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/918888878709"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2025 Mayur Furniture. All Rights Reserved.</p>
          <p>
            <a href="/terms-of-service">Terms of Service</a> |
            <a href="/privacy-policy"> Privacy Policy</a> |
            <a href="/refund-policy"> Refund Policy</a> |
            <a href="/accessibility-policy"> Accessibility Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
