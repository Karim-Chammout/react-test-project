import React from "react";
import CARDS_LIST from "./CardsDetails";

function Cards(props) {
  const { title, paragraph, imgUrl } = CARDS_LIST;

  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{paragraph}</p>
      </div>
    </div>
  );
}

export default Cards;
