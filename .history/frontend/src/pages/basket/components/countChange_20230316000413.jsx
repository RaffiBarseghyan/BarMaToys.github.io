import { memo } from "react";
import { useState } from "react";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);

    if (item.click) {
      
    }

  return (
    <>
      <td scope="row">
        <input
          type="number"
          min={1}
          max={100}
          className={`form-control ${style.cradlesBox}`}
          onWheel={(e) => e.target.blur()}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </td>
      <td scope="row">
        <Greeting count={count} item={item.dataitem} id={item.id} total={item.total}/>
      </td>
    </>
  );
}


 const Greeting = memo(function Greeting({ count, item , id, total}) {
  
  total += Number(count) * item;
  
  window.localStorage.setItem(`total`, total);
  return Number(count) * item;
});

export default CountChange;
