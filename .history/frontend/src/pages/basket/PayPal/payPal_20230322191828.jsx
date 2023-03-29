import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';
import style from "./paypal.module.scss";


export default function Paypal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Peypal
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    //Peypal end


    return (<div className='d-flex justify-content-center'>
        <button className={style.pay} onClick={handleShow}>Pay</button>
        <Modal id="payOnlineModal" className={style.more} show={show} onHide={handleClose} dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">

            <Modal.Header closeButton className={style.button1}>
                <Modal.Title className={style.itemName}>
                    Online Payment
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>

                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />

            </Modal.Body>
        </Modal>
    </div>)
}





