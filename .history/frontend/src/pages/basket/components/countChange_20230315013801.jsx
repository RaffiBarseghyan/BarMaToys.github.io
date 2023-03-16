import { memo } from "react";
import { useState } from "react";
import style from "../basket.module.scss";
function CountChange(item) {
  const [count, setCount] = useState();
console.log(typeof item.dataitem);
  return (
    <>
      <td scope="row">
        <input
          type="number"
          min={1}
          max={100}
          className={`form-control ${style.cradlesBox}`}
          defaultValue={item.item}
          onWheel={(e) => e.target.blur()}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </td>
      <td scope="row">{<Greeting count={count} /> * item.dataitem}</td>

      
    </>
  );
}

const Greeting = memo(function Greeting({ count }) {
  return count;
});

export default CountChange;
