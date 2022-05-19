import React from 'react';
import "./Product.css";
import { AiFillStar } from "react-icons/ai";
import 'animate.css';
// import { Button } from 'react-bootstrap';

const Product = (props) => {
    console.log(props.product);
    // const {img,price} = props.product
    const { img,price,name } = props.product || {};

    return (
        
<div className="col-lg-3 col-md-6 col-12 mb-4  animate__animated animate__fadeInTopRight ">
        <div className="card-container ">
          <div className="image-container">
            <img className='w-100' src={img} alt="" />
          </div>
          <div className="card-content ">
            <div className="card-title text-center text-danger">
              <h3 >{name}</h3>
              <p className="text-dark">Price:{price}</p>
              <div className="text-warning font">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </div>
          </div>
          <div >
          <button className="button mb-2">Buy Now</button>
      {/* <Button className='mx-5' variant="danger">Buy Now</Button> */}
          </div>
        </div>
        </div>
        
        
    );
};

export default Product;