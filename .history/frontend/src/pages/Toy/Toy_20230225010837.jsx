import React from 'react';
import { Navigate } from 'react-router-dom';
import style from "./toy.module.scss";

CONST function Toy(props) {
   console.log(props.location.propsId); 

   if (!props.location.propsId) return <Navigate to="/" />;
   return(<>
   
   </>)

}