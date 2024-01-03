import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Footer </h3>
            <p>Oks</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Contact Information</h3>
            <p>Email: abdulrafayakb1515@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
