
import './App.css';
import "./OurProduct.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from './Components/Header';
import Viewproduct1 from './Components/ViewProduct1';
import ProductList from "./Components/ProductList";
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/AboutUs';
import ContactInfo from './Components/ContactInfo';
import Footer from './Components/Footer';
import TermsOfService from './Components/TermsOfService';
import RefundPolicy from './Components/RefundPolicy';
import AccessibilityPolicy from './Components/AccessibilityPolicy';
import PrivacyPolicy from './Components/PrivacyPolicy';
import QualityAssurance from './Components/QualityAssurance';
import CustomerReviews from './Components/CustomerReviews  ';
import ShippingDelivery from './Components/ShippingDelivery';
import ReturnPolicy from './Components/ReturnPolicy ';
import WarrantyInformation from './Components/WarrantyInformation ';

import FAQs from './Components/FAQs';





function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Header />} />

            <Route path="/OurProducts" element={<ProductList />} />
            <Route path="/product/:id" element={<Viewproduct1 />} />
            <Route path="/ContactUs" element={<ContactForm />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/accessibility-policy"
              element={<AccessibilityPolicy />}
            />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/customer-reviews" element={<CustomerReviews />} />
            <Route path="/shipping-delivery" element={<ShippingDelivery />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route
              path="/warranty-information"
              element={<WarrantyInformation />}
            />
           
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
          <ContactInfo />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
