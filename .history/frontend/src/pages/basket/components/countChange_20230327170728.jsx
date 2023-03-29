import axios from "axios";
import { memo } from "react";
import { useState } from "react";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);

  const testChange = (e) => {
    setCount(e.target.value);
    
  };
  console.log(item.onClickChange);  
  return (
    <>
      <td scope="row" className="me-3">
        <input
          type="number"
          min={1}
          max={100}
          className={`form-control ${style.cradlesBox}`}
          onWheel={(e) => e.target.blur()}
          value={count}
          onChange={testChange}
        />
      </td>
      <td scope="row" className="mt-1 ms-3">
        
        <Greeting count={count} item={item.dataitem} id={item.id} onClickChange={}/>֏
      </td>
    </>
  );
}

const Greeting = memo(function Greeting({ count, item, id }) {
  if (Math.sign(count) == -1) {
    return 0
  } else {
    let formData = new FormData();
    formData.append("toyId", id);
    formData.append("userEmail", localStorage.getItem("loginEmail"));
    formData.append("count", Number(count));

    axios.post(`http://barmatoys.loc/api/change/basket/update`, formData);
    return Number(count) * item;
  }
});

export default CountChange;
