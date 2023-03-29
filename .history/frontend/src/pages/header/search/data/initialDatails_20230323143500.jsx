import axios from "axios";
import { useEffect, useState } from "react";

const [Toy1, setToy1] = useState([]);

useEffect(() => {
  axios.get(`http://barmatoys.loc/api/get/toy`).then((res) => {
    const persons = res.data;
    setToy1(persons.data1);
  });
}, []);
const initialDetails = [
  {
    id: 1,
    imgPath: "/assets/img/1.png",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    address: "New Delhi, India",
  },
  {
    id: 2,
    imgPath: "/assets/img/2.png",
    name: "Mary Rosamund",
    email: "agra@rosie.com",
    address: "Tbilisi, India",
  },
  {
    id: 3,
    imgPath: "/assets/img/3.png",
    name: "Sherlock Watson",
    email: "irene@johnlock.com",
    address: "Baker Street, India",
  },
  {
    id: 4,
    imgPath: "/assets/img/4.png",
    name: "John Holmes",
    email: "mary@johnlock.com",
    address: "Baker Street, India",
  },
  {
    id: 5,
    imgPath: "/assets/img/5.png",
    name: "Mycroft Lestrade",
    email: "britishgovt@gmail.com",
    address: "London, India",
  },
  {
    id: 6,
    imgPath: "/assets/img/1.png",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    address: "New Delhi, India",
  },
  {
    id: 7,
    imgPath: "/assets/img/2.png",
    name: "Mary Rosamund",
    email: "agra@rosie.com",
    address: "Tbilisi, India",
  },
  {
    id: 8,
    imgPath: "/assets/img/3.png",
    name: "Sherlock Watson",
    email: "irene@johnlock.com",
    address: "Baker Street, India",
  },
  {
    id: 9,
    imgPath: "/assets/img/4.png",
    name: "John Holmes",
    email: "mary@johnlock.com",
    address: "Baker Street, India",
  },
  {
    id: 10,
    imgPath: "/assets/img/5.png",
    name: "Mycroft Lestrade",
    email: "britishgovt@gmail.com",
    address: "London, India",
  },
];

export default initialDetails;
