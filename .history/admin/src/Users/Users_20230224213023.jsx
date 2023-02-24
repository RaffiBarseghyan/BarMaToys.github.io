import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/user`).then((res) => {
      const persons = res.data;
      setUser(persons.user);
    });
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Email verified</th>
            <th scope="col">Address</th>
            <th scope="col">Address Line 2</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Postal code</th>
            <th scope="col">Phone</th>
            <th scope="col">Phone Line 2</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr key={item.prodId}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.email_verified_at}</td>
                <th>{item.address}</th>
                <th>{}</th>
                <th>{item.city}</th>
                <th>{item.country}</th>
                <th>{itemostal} code</th>
                <th>Phone</th>
                <th>Phone Line 2</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
