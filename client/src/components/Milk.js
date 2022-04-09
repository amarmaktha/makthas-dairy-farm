import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import {addToCart} from "../actions/cartActions";
export default function Milk({ milk }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("pure milk");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  function addtocart()
  {
      dispatch (addToCart(milk , quantity , varient))
  }
  return (
    <div
      style={{ margin: "50px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{milk.name}</h1>
        <img
          src={milk.image}
          className="img-fluid"
          alt="description"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {milk.varients.map((varient) => {
              return <option value={varient}> {varient} </option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}> {i + 1} litres </option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : ₹ {milk.prices[0][varient] * quantity} /-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{milk.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={milk.image} className ="img-fluid" style={{height:"300px !important" }}/>
        <p>{milk.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
