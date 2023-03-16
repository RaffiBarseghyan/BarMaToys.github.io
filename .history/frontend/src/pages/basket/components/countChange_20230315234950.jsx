import { memo } from "react";
import { useState } from "react";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);
    console.log(item.click);

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
        <Greeting count={count} item={item.dataitem} id={item.id} />
      </td>
    </>
  );
}


 const Greeting = memo(function Greeting({ count, item , id}) {
  let Subtotal = 0;
  Subtotal += Number(count) * item;
  
  window.localStorage.setItem(`Subtotal${id}`, Subtotal);
  return Number(count) * item;
});

export default CountChange;
