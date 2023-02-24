import React from "react";
import { Navigate } from "react-router-dom";
import style from "./toy.module.scss";
import { useLocation } from "react-router-dom";

function Toy() {
  const location = useLocation();
  const { from } = location.state;


  if (!from) return <Navigate to="/" />;
  return (
    <>
      <div>

      </div>
    </>
  );
}

export default Toy;
