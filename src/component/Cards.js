import React from "react";

function Cards(props) {
  const { title, paragraph, imgUrl } = props.item;

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
