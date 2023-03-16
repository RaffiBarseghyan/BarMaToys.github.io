import axios from "axios";
import { memo } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);

  if (item.click == false) {
    let formData = new FormData();
    formData.append("toyId", item.id);
    formData.append("userEmail", localStorage.getItem("loginEmail"));
    formData.append("count", Number(count));

    axios.post(`http://barmatoys.loc/api/change/basket/update`, formData);

    Swal.fire({
      timer: 2000,
      didOpen: () => {
        Swal.showLoading();
      },
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
  window.localStorage.setItem("click", false);
  return Number(count) * item;
});

export default CountChange;
