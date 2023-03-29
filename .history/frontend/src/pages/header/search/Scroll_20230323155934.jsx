import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;