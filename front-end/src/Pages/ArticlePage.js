import React from "react";
import Navbar from "../Components/Navbar";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import "../Components/Footer.css";
import "./Page.css";

const ArticlePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="header">Articles</h1>
      <Article />
      <Footer />
    </div>
  );
};

export default ArticlePage;
