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

    axios.post(`http://barmatoys.loc/api/add/basket/update`, formData);


    
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
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
