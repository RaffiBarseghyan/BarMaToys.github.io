import React from 'react';
import {Redirect} from 'react-router-dom';
import style from "Toy.module.scss";

export default function Toy(props) {
   console.log(props.location.propsId); 

   if (!props.location.propsId) return <Redirect to="/" />;

}