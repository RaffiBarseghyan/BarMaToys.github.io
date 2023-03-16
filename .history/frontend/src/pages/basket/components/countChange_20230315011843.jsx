import { useState } from "react";
import style from '../basket.module.scss'
function CountChange(item) {
  const [count, setCount] = useState();

  console.log(Object.values(item));
  
  const countChange = (evt) => {
    // console.log(evt.target.accessKey);
    setCount((evt.target.accessKey = evt.target.value));
  };
  return (
    <>
      <input
        type="number"
        min={1}
        max={100}
        className={`form-control ${style.cradlesBox}`}
        defaultValue={item[0]}
        onWheel={(e) => e.target.blur()}
        
        onChange={countChange}
      />
    </>
  );
}

export default CountChange;
