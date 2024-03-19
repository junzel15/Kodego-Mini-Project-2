import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Welcome to our store! We are dedicated to providing high-quality
              products to our valued customers. Our mission is to offer a wide
              range of products that cater to various needs and preferences. At
              our store, customer satisfaction is our top priority. Whether
              you're shopping for yourself or looking for the perfect gift,
              we're here to help. Feel free to explore our collection and reach
              out to us if you have any questions or feedback.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>Email: bogsangitelvis@gnail.com</li>
              <li>Phone: 09555261873</li>
              <li>Address: Pagadian City</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
