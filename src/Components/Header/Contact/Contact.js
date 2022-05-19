import React from "react";
import { Form } from "react-bootstrap";
import Bridal from "../Image/Bridal.jpg";
import "./Contact.css";
import "animate.css";

const Contact = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6   animate__animated animate__fadeInLeftBig">
          <img className="resizer" src={Bridal} alt="" />
        </div>
        <div
          className="col-12 col-lg-6 contact  animate__animated animate__fadeInUpBig"
          style={{ width: "40%" }}>
          <h1 className="text-center mt-5 left text-danger ">
            Con<span className="text-dark">tact</span> US
          </h1>
          <div className=" input mt-5">
            <input
              required
              type="text"
              className="form-control mb-2 animate__animated animate__fadeInLeftBig "
              placeholder="Name"
            />
            <input
              required
              type="text"
              className="form-control mb-2 animate__animated animate__fadeInRightBig"
              placeholder="Email"
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please Send Me Text</Form.Label>
              <Form.Control
                className="animate__animated animate__fadeInUpBig"
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <button className="container mt-2 btn mb-2">
              <p className="text-light animate__animated animate__fadeInLeftBig">
                SEND
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
