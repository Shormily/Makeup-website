import React from 'react';
import 'animate.css';
import "./About.css";
const About = () => {
    return (
        <>
        <div className='about-us animate__animated animate__fadeInRightBig'>
         <h1 className='text-center mt-5 text-light animate__animated animate__fadeInLeft'>About US / Home</h1>
        </div>
         <div className='mt-5'>
        <h1 className='text-center about-part mb-5 animate__animated animate__fadeInRightBig'>About <span className='text-danger'>US</span> </h1>
        <div className='container mb-5'>
            <div className='row'>
           
           
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
        
        </>
    );
};

export default About;