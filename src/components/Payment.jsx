import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payement = () => {
  //feedback system
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const { couch } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", couch.product_cost);
      formData.append("phone", phone);
      //post data
      const response = await axios.post(
        "https://amondi00.pythonanywhere.com/api/mpesa_payment",
        formData
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2">Make Mpesa Payement- LIPA NA MPESA</h1>
      <div className="shadow card col-md-6  p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <h3 className="text-secondary">{couch.product_name}</h3>
        <p className="text-danger">Ksh{couch.product_cost}</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            value={phone}
            className="form-control"
            type="tel"
            placeholder="Enter 254*********"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <button type="danger" className="btn btn-success w-50">
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payement;
