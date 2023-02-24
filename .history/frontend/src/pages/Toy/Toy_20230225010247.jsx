import style from "Toy.module.scss";

import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Toy(props) {
   console.log(props.location.propsId); 
   
   if (!props.location.propsId) return <Redirect to="/" />;

}