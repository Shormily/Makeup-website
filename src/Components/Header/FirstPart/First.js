import React from 'react';
import img5 from '../Image/img5.jpg';
import img10 from '../Image/img10.jpg';
import "./First.css";
import 'animate.css';
const First = () => {
    return (
        <>
           <div className='bg'>
           <div className='container '>
          <div className='row marg'>
              <div className='col-12 col-md-6 '>
                <h1 className='mt-5 name text-danger animate__animated animate__fadeInLeft'>Welcome To Our Makup Shop</h1>
                 
              </div>
              <div className='col-12 col-md-6 mt-5 d-flex mb-5 animate__animated animate__fadeInRight '>
              <img  className="d-block w-50 photo ml-5 " src={img10} alt="" />
              <img  className="d-block w-50 photo ml-5  " src={img5} alt="" />
             
              </div>
          </div>
        </div>
       
        </div> 
        </>
    );
};

export default First;