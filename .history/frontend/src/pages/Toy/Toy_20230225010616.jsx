import React from 'react';
import style from "./toy.module.scss";

export default function Toy(props) {
   console.log(props.location.propsId); 

   if (!props.location.propsId) return <Redirect to="/" />;

}