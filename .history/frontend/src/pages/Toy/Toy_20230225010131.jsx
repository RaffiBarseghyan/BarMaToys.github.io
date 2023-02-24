import style from "Toy.module.scss";

import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Toy(props) {
   console.log(props.location.propsSearch); // Наши переданные данные
   //Но учтите, что они будут доступны только, при переходе по этой ссылке. 
   //Если страницу перезагрузить, то получим - undefined. 
   //Это решается редиректом обратно, если нет пропса:
   if (!props.location.propsSearch) return <Redirect to="/firstpage" />;
...
}