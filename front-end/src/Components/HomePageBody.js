import React from "react";
import { Link } from "react-router-dom";
import "./HomePageBody.css";
import BodyPart2 from "./BodyPart2";
import Footer from "./Footer";
const Body = () => {
  return (
    <div >
      <div className="firstDiv">
        <h1 className="Header">IT’S NOT JUST A SPEECH.</h1>
        <h1 className="Header">IT’S THE NEXT STEP IN YOUR CAREER.</h1>
        <h4>Speaker coaching & speechwriting for industry leaders.</h4>
        <Link to="/AddData">
          <button id="FirstDivButton">Work With Me</button>
        </Link>
      </div>

      <div className="secondDiv">
        <h1 className="secondDivHeader">150+</h1>
        <h3 className="secondDivText">
          TED & TEDx <br></br>Speaker Clients
        </h3>
        <h1 className="secondDivHeader">65</h1>
        <h3 className="secondDivText">
          Million Views <br></br>Online
        </h3>
        <h1 className="secondDivHeader">20</h1>
        <h3 className="secondDivText">
          Featured as the “Talk of <br></br> the Day” on TED.com
        </h3>
        <h1 className="secondDivHeader">35</h1>
        <h3 className="secondDivText">
          Different Language <br></br> Translations
        </h3>
      </div>
      <div className="firstDiv">
        <h1 className="Header">
          GREAT SPEECHES DON’T
        </h1>
        <h1 className="Header">
          HAPPEN BY ACCIDENT
        </h1>
        <h4>You have the “big idea.” I’ll help you bring it to life.</h4>
      </div>
     <BodyPart2/>
     <div className="firstDiv">
        <h1  className="Header">
        IF YOU WANT TO CHANGE THE WORLD,
        </h1>
        <h1 className="Header">
        NOW’S NOT THE TIME TO “WING IT
        </h1>
        <h4>I only take on clients who are committed to making massive progress, fast.</h4>
      </div>
     
     <Footer/>
    </div>
  );
};

export default Body;
