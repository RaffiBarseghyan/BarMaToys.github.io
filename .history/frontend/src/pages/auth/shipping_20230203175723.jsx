import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import style from "./shipping.module.scss";

export default function Shipping() {
  const [email, setemail] = useState("");

  const emailChange = (e) => {
    setemail(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>Customer Info</h2>
      </div>
    </>
  );
}

