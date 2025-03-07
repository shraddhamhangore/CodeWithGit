import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";

const ContactInfo = () => {
  return (
    <div className="floating-contact">
      <a href="tel:+918888878709" className="contact-icon">
        <FaPhone />
      </a>
      <a href="mailto:mayurfurniture10@gmail.com" className="contact-icon">
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/918888878709"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactInfo;