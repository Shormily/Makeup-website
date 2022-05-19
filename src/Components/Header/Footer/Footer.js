import React from 'react';
import './Footer.css';
import 'animate.css';
import { BsFacebook,BsLinkedin,BsTelephoneFill} from "react-icons/bs";
import { AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className='site-footer bg-dark p-5'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-md-4 mb-5 animate__animated animate__fadeInLeftBig'>
                            <p className='header mb-5'>Abou Us</p>
                            <h6>Dolor ipsum labore labore at sed justo clita dolor. Tempor consetetur gubergren diam invidunt consetetur no elitr. Aliquyam elitr takimata.</h6>
                        </div>
                        <div className='col-md-4 mb-5 animate__animated animate__zoomIn'>
                            <p className='header mb-5'>Contact Address</p>
                            <ul className='list-unstyle footer-link '>
                               
                                <li className='d-flex'>
                                    <h6 className='me-2'> Telephone:</h6><h6 className='text-white'>
                                        +33 45 67 89 856
                                    </h6>

                                </li>
                                <li className='d-flex'>
                                    <h6 className='me-2'>Email:</h6><h6 className='text-white'>
                                        ShormilyRais@gmail.com
                                    </h6>

                                </li>
                                <li className='d-flex ml-5'>
                                    <h6 className='me-2 ml-2 '>Address:</h6><h6 className='text-white'>
                                        28 Avent Nama,Cite name here ,Country name here
                                    </h6>

                                </li>
                            </ul>

                        </div>
                        <div className='col-md-4 mb-5 animate__animated animate__zoomIn '>
                            <p className='header mb-5'> Quick Link</p>
                            <ul className='list-unstyled footer-link '>
                                <h6 className='mb-2'>About US</h6>
                                
                                <h6>Our Pets</h6>
                                <h6>Blog Articles</h6>
                                <h6>Contact  US</h6>
                            </ul>
                        </div>
                        <div className='col-md-4 '>
                            <p className='header mb-5  animate__animated '> Our Social media</p>
                            <ul  className='list-unstyled  mx-2 d-flex  animate__animated '>
                                <li ><BsFacebook className='footer-social me-2 animate__animated animate__rotateIn'/></li>
                                <li><AiOutlineTwitter className='footer-social me-2 animate__animated'/></li>
                                <li><AiOutlineInstagram className='footer-social me-2 animate__animated'/></li>
                                <li> <BsLinkedin className='footer-social me-2 animate__animated'/></li>
                                <li><BsTelephoneFill className='footer-social me-2 animate__animated'/></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;