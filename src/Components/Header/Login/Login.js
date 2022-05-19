import React from 'react';
import { NavLink } from 'react-router-dom';
import img57 from "../Image/img57.jpg";
import { FcKey,FcAdvance } from "react-icons/fc";
import 'animate.css';
import "./Login.css";
import useAuth from '../Hook/useAuth';

const Login = () => {
  const {signusInWithGoogle} = useAuth ();
    return (
        <>
    
        <div className='row justify-content-center  mx-5'>
        <div className='col-lg-6 col-md-6 col-12  '>
             <img className='resize mx-5 animate__animated animate__fadeInDown' src={img57} alt=""/>
             
             </div>
         <div className=' contact col-md-6 col-12 col-lg-6 container animate__animated animate__fadeInUpBig '>
                <h1 className='text-center  left text-danger '>Please <span className='text-dark'>Log</span> In</h1>
                <div className=' input-part mt-5 '>
                <input
                  required
                  type="text"
                  className="form-control mb-2 "
                  placeholder="Name"
                  
                />
                <input
                  required
                  type="text"
                  className="form-control mb-2"
                  placeholder="Email"
                  
                />
                <input
                  required
                  type="text"
                  className="form-control mb-2"
                  placeholder="Password"
                  
                />
                <input
                  required
                  type="text"
                  className="form-control mb-2"
                  placeholder="Re-Type-Password"
                  
                />
                
                
                 
    
                <button className='container mt-2 btn '><p className='text-light'>Log In</p></button>
                <p className='text-center mt-2'>Or</p>
                <NavLink to="/signup" className='decoration' > <p className=' text-center seige '>Already You have Account? Please Sign Up <FcKey/><FcAdvance/></p></NavLink>
                <hr/>
                <button className='container  btn-2 mb-2 ' onClick={signusInWithGoogle}><p className='text-light'>Google Sign In</p></button>
                </div>
               
              
            </div> 
            
           
            </div>
        
            
            
            
            
             
                    
                    
                  
            </>
    );
};

export default Login;