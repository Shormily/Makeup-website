import React from 'react';
import img54 from "../Image/img54.jpg"
import 'animate.css';
import useAuth from '../Hook/useAuth';

const SignUp = () => {
  const {signusInWithGoogle} = useAuth ();
    return (
        <div className='container'>
          <div className='row'>
        <div className=' col-md-6 col-sm-12  '>
             <img className='resize mx-5 animate__animated animate__fadeInLeft' src={img54} alt=""/>
             </div>
         <div className=' contact col-md-6 col-sm-12 container animate__animated animate__fadeInRight '>
                <h1 className='text-center  left text-danger '>Please <span className='text-dark'>Sign</span> UP</h1>
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
                
                
                 
    
                <button className='container mt-2 btn '><p className='text-light'>Sign Up</p></button>
                <p className='text-center mt-2'>Or</p>
                <hr/>
                <button className='container  btn-2 mb-2' onClick={signusInWithGoogle}><p className='text-light'>Google Sign In</p></button>
                </div>
               
              
            </div> 
            
           
            </div>
        
            
            
            
            
             
                    
                       
        </div>
    );
};

export default SignUp;