import React, { useState } from "react";

const faqsData = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept Credit/Debit Cards, Net Banking, UPI, and Cash on Delivery (COD) for selected locations.",
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the 'Track Order' page by entering your tracking ID.",
  },
  {
    question: "What is the estimated delivery time?",
    answer: "Delivery time varies based on your location. Standard delivery takes 5-7 business days.",
  },
  {
    question: "Can I return an item if I don’t like it?",
    answer: "Yes, you can return items within 7 days of delivery, provided they are unused and in original packaging.",
  },
  {
    question: "Do you offer a warranty on furniture?",
    answer: "Yes, we offer a 1-year warranty on wooden furniture and a 6-month warranty on metal/upholstery items.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can email us at mayurfurniture10@gmail.com or call our support team during business hours.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      {faqsData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{openIndex === index ? "➖" : "➕"}</span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
