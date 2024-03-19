import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Order.css";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    items: "",
    price: "",
    quantity: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div>
        <h2>Order Now</h2>
        <p>
          To place an order, please fill out the form below with your details
          and the items you'd like to purchase.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="items">Items:</label>
            <textarea
              id="items"
              name="items"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cashOnDelivery">Cash on Delivery</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <button type="submit">Submit Order</button>
        </form>
      </div>
    </Container>
  );
};

export default Order;
