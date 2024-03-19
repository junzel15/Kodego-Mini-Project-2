import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Container>
      <h1 className="title">Products</h1>

      <Row>
        {products.map(
          (product) =>
            product.images.length > 0 && (
              <Col key={product.id} md={4} className="mb-4">
                <div className="product">
                  <img src={product.images[0]} alt={product.title} />
                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category.name}</p>
                  </div>
                </div>
              </Col>
            )
        )}
      </Row>
    </Container>
  );
}

export default Products;
