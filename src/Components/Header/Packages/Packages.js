import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Packages.css";
import "animate.css";
const Packages = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="first-part-Product animate__animated animate__fadeInUp"></div>
      <div className="container mb-5 ">
        <h1 className="service mt-5 mb-5 text-center text-danger animate__animated animate__fadeInLeftBig">
          Our <span className="text-dark">Product</span> Page
        </h1>
        <div className="row">
          {products.map((product) => (
            <Product product={product} key={product.key}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
