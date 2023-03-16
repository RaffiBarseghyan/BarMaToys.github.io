import { memo } from "react";
import { useState } from "react";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);

  if (item.click) {
    let formData = new FormData();
    formData.append("toyId", id.id);
    formData.append("userEmail", localStorage.getItem("loginEmail"));
    formData.append("count", Number(count));

    axios.post(`http://barmatoys.loc/api/add/basket/update`, formData);
    Swal.fire({
      title: "Success",
      text: "You have been register-in successfully",
      type: "success",
    });
    

    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
        <Greeting count={count} item={item.dataitem} />
      </td>
    </>
  );
}

const Greeting = memo(function Greeting({ count, item }) {
  return Number(count) * item;
});

export default CountChange;
