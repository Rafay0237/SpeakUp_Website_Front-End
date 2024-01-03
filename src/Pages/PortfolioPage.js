import React from "react";
import Navbar from "../Components/Navbar";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
import "../Components/Footer.css";
import "./Page.css";

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Portfolio</h1>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
