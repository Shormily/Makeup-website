import React from 'react';
import { Navbar,Container,Nav,  } from 'react-bootstrap';
// import {FaFacebookSquare,FaInstagram,FaYoutube} from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiPencilBrush } from "react-icons/gi";
import { IoLogInSharp } from "react-icons/io5";
import 'animate.css';
import useAuth from './Hook/useAuth';
const Header = () => {
  const {user,logout} = useAuth();
    return (
        <>

<Navbar className="nav-bar shadow sticky-top p-3 animate__animated animate__fadeInRight   " expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {/* <img style={{ width: "50%" }} className="logo" src={lo} alt="" /> */}
            <h2 className='text-dark font animate__animated  animate__fadeInRight'><GiPencilBrush className='icon animate__animated animate__fadeInLeftBig'/>Cosmetics Shop</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
            
                as={NavLink}
                // activeClassName="active"
                className="nav-link animate__animated animate__fadeInUp"
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                // activeClassName="active"
                className="nav-link animate__animated animate__fadeInUp"
                to="packages"
              >
                Product
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                // ActiveClassName="active"
                className="nav-link animate__animated animate__fadeInBottomLeft"
                to="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                // activeClassName="active"
                className="nav-link animate__animated animate__fadeInBottomLeft"
                to="/contact  "
              >
                Contact
              </Nav.Link>
              {!user?.email && (
                <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInDownBig"
                to="/login  "
              >
              Login <IoLogInSharp/>
              </Nav.Link>
              )}
              

              {user?.email && (
                
                 <Nav.Link
                 onClick={logout}
                 as={NavLink}
                 className="nav-link animate__animated animate__fadeInDownBig"
                 to="/login  "
               >
               LogOut<IoLogInSharp/><span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-dark ms-3">{user?.displayName}</small>
                )}
              </span>
               </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
            
        </>
    );
};

export default Header;