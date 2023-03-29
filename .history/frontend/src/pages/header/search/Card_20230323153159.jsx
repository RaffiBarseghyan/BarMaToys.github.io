import React from "react";

function Card({ person }) {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 d-flex justify-content-between"
      style={{ width: "400px", height: "100px" }}
    >
      <div>
        <h2>{person.name}</h2>
        <p>{person.description}</p>
      </div>

      <div className="d-flex">
        <img
          className="br-100 h3 w3 dib"
          alt={person.name}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s"
        />
        <div>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
        </div>
      </div>
      <div>{person.price}$</div>
    </div>
  );
}

export default Card;
