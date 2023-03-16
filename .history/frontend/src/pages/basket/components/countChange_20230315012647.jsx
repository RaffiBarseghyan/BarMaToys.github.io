import { useState } from "react";
import style from "../basket.module.scss";
function CountChange(item) {
  const [count, setCount] = useState();

  console.log();

  const countChange = (evt) => {
    // console.log(evt.target.accessKey);
    setCount(( evt.target.value));
  };

  console.log(count);
  return (
    <>
      <input
        type="number"
        min={1}
        max={100}
        className={`form-control ${style.cradlesBox}`}
        defaultValue={Number(Object.values(item)[0])}
        onWheel={(e) => e.target.blur()}
        onChange={countChange}
        value={name} onChange={e => setName(e.target.value)}
      />
    </>
  );
}

export default CountChange;
