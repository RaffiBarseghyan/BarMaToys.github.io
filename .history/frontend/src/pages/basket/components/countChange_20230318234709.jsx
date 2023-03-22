import axios from "axios";
import { memo } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import style from "../basket.module.scss";

function CountChange(item) {
  const [count, setCount] = useState(item.item);

  if (item.click) {
    let formData = new FormData();
    formData.append("toyId", item.id);
    formData.append("userEmail", localStorage.getItem("loginEmail"));
    formData.append("count", Number(count));

    axios.post(`http://barmatoys.loc/api/change/basket/update`, formData);

    // Swal.fire({
    //   timer: 2000,
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  }

  const testChange = (e) => {
    setCount(e.target.value);
    localStorage.setItem("click", 0);
  };

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
          onChange={testChange}
        />
      </td>
      <td scope="row">
        <Greeting count={count} item={item.dataitem} id={item.id} />֏
      </td>
    </>
  );
}

const Greeting = memo(function Greeting({ count, item, id }) {
  let formData = new FormData();
  formData.append("toyId", id);
  formData.append("userEmail", localStorage.getItem("loginEmail"));
  formData.append("count", Number(count));

  axios.post(`http://barmatoys.loc/api/change/basket/update`, formData);
  return Number(count) * item;
});

export default CountChange;
