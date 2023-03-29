import  style  from './search.module.scss';
import React from 'react';

const Scroll = (props) => {
  return( 
    <div className={style} style={{overflowY: 'scroll', height:'60vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;