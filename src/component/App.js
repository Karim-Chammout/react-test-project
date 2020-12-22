import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";
import Footer from "./Footer";
import Cards from "./Cards";
import CARDS_LIST from "./CardsDetails";

function App() {
  const CardsList = CARDS_LIST.map((product, index) =>(
    <div className="col-md-3 mb-2">
      <Cards key = {index} item = {product} />
    </div>
  )
);
  
  return (
    <div className="container">
      <div className="main-navbar">
        <NavBar />
      </div>
      <div className="row py-5">
        <div className="col-md-6">
          <HeroText />
        </div>
        <div className="col-md-6">
          <HeroImg />
        </div>
      </div>
      <div className="row py-5">
        {CardsList}
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
    </div>
  );
}
export default App;
