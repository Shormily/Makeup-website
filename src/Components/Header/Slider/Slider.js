import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../Image/img1.jpg";
import img2 from "../Image/img2.jpg";
import img17 from "../Image/img17.jpg";
import img18 from "../Image/img18.jpg";
import img15 from "../Image/img15.jpg";
import img19 from "../Image/img19.jpg";
import 'animate.css';
import "./Slider.css";

const Slider = () => {
    return (
      <div>
 <div className='d-flex'>
<section className='review-wrapper review-buttom' >
     <div className='container  '>
          <div className='row'>
              <div className='col-12 col-md-6 mt-5 bg-dark p-2 animate__animated animate__fadeInDown'>
              <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          
        </Carousel.Item>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img17}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
        
      </Carousel>  
              </div>
              <div className='col-12 col-md-6  d-flex bg-white p-2 animate__animated animate__fadeInUp'>
              <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img18}
            alt="First slide"
          />
          
        </Carousel.Item>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img15}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img19}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
        
      </Carousel>
      
             
              </div>
          </div>
        </div>
  
    
      
        
      
      </section>

        </div>
        <div className=''>
        <h1 className='text-center about-part mb-5  animate__animated animate__fadeInRightBig  '>About <span className='text-danger'>US</span> </h1>
        <div className='container mb-5'>
            <div className='row '>
           
           
                <div className='col-12 col-md-6 animate__animated animate__fadeInLeftBig'>
                <h1 className='text-danger ' >Our Service</h1>
                    <p className='mt-4 mb-4 '>We always like to take product orders on time and try to deliver on time. We deliver the product within seven days of order. If a product is damaged and returned within a day, we will return the product of your choice or refund the money.</p>
                </div>
                <div className='col-12 col-md-6 animate__animated animate__fadeInUpBig'>
                <h1>Who Is Mine</h1>
                    <p className='mt-4 mb-4'>We are the seller of the product. We have been working for ten long years with the product at home. We are working efficiently and will continue to work.</p>
                </div>
                <div className='col-12 col-md-6  animate__animated animate__fadeInUpBig'>
                    <h1>The Quality of Our Products</h1>
                    <p className='mt-4 mb-4'>The quality of our products is always high quality. We always order products from high quality companies and sell the products at the right price.</p>
                </div>
                <div className='col-12 col-md-6  animate__animated animate__fadeInUpBig'>
                <h1 className='text-danger'>Our Product Expires</h1>
                    <p className='mt-4 mb-4 '>When our product expires, we cancel it from our store and always keep the expired product so that our product is not tarnished. If the product expires at the time of delivery, we replace it. We always try our best to provide the best service.</p>
                </div>
            </div>
        </div>
        </div>
       
      </div>
       
        
        
    );
};

export default Slider;