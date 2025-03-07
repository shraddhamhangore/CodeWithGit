


import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaComments } from "react-icons/fa";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    orderNumber: "",
    orderName: "",
    productNumber: "",
    productName: "",
    message: "",
    generalQuestion: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.topic) newErrors.topic = "Please select a topic";
    if (
      !formData.message &&
      formData.topic === "General Question" &&
      !formData.generalQuestion
    )
      newErrors.message = "Message is required";
    if (!formData.orderNumber && formData.topic === "Order Issue")
      newErrors.orderNumber = "Order Number is required";
     if (!formData.orderName && formData.topic === "Order Issue")
       newErrors.orderName = "Order Name is required";
    if (!formData.productName && formData.topic === "Product Inquiry")
      newErrors.productName = "Product Name is required";
    if (!formData.productNumber && formData.topic === "Product Inquiry")
      newErrors.productNumber = "Product Number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        orderNumber: "",
        orderName: "",
        productNumber: "",
        productName: "",
        message: "",
        generalQuestion: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Have a question?</h1>{" "}
        <p>
          We’re here to help! Fill out the form or reach us via email or phone.
          Our Customer Care Team is available to help you get the best
          experience out of K18 Hair, whether you have an issue about your order
          or are looking for helpful hair tips.{" "}
        </p>{" "}
        <p>
          Everyone gets a personalized response, so please allow 24 hours during
          business hours for a reply. Our business hours are M-F from 9am to 5pm
          PT.{" "}
        </p>
        <div className="contact-details">
          <p>
            <FaEnvelope id="red-icon" /> mayurfurniture10@gmail.com       
          </p>
          <p>📞 +918888878709</p>
          <p>
            <FaComments id="red-icon" />
            Chat with us
          </p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="input-container">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select name="topic" value={formData.topic} onChange={handleChange}>
          <option value="">Select your topic</option>
          <option value="Order Issue">Order Issue</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="General Question">General Question</option>
        </select>
        {errors.topic && <p className="error">{errors.topic}</p>}

        {/* Show Order Number and Product Name when Order Issue is selected */}
        {formData.topic === "Order Issue" && (
          <>
            <input
              type="text"
              name="orderNumber"
              placeholder="Order Number"
              value={formData.orderNumber}
              onChange={handleChange}
            />
            {errors.orderNumber && (
              <p className="error">{errors.orderNumber}</p>
            )}
          </>
        )}
        {formData.topic === "Order Issue" && (
          <>
            <input
              type="text"
              name="orderName"
              placeholder="Order Name"
              value={formData.orderNumber}
              onChange={handleChange}
            />
            {errors.orderName && <p className="error">{errors.orderName}</p>}
          </>
        )}

        {/* Show Product Name when Product Inquiry is selected */}
        {formData.topic === "Product Inquiry" && (
          <>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleChange}
            />
            {errors.productName && (
              <p className="error">{errors.productName}</p>
            )}
          </>
        )}
        {formData.topic === "Product Inquiry" && (
          <>
            <input
              type="text"
              name="productNumber"
              placeholder="Product Number"
              value={formData.productNumber}
              onChange={handleChange}
            />
            {errors.productName && (
              <p className="error">{errors.productNumber}</p>
            )}
          </>
        )}

        {/* Show General Questions Dropdown when General Question is selected */}
        {formData.topic === "General Question" && (
          <>
            <select
              name="generalQuestion"
              value={formData.generalQuestion}
              onChange={handleChange}
            >
              <option value="">Select a general question</option>
              <option value="What are your store hours?">
                What are your store hours?
              </option>
              <option value="Do you offer home delivery?">
                Do you offer home delivery?
              </option>
              <option value="What is your return policy?">
                What is your return policy?
              </option>
              <option value="Do you have any ongoing discounts?">
                Do you have any ongoing discounts?
              </option>
            </select>

            <textarea
              name="message"
              placeholder="Or type your own question"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </>
        )}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
