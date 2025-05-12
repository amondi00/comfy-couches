import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState();
  const img_url = "https://amondi00.pythonanywhere.com/static/images/";

  // feedback statements
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("connecting...");

    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);

      const response = await axios.post(
        "https://amondi00.pythonanywhere.com/api/mpesa_payment",
        formData
      );

      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <h1 className=" m-2 payment ">MAKE MPESA PAYMENT - LIPA NA M-PESA</h1>

      {loading}
      {success}
      {error}

      <div className="card shadow col-md-6 p-2">
        <h1 className="mpesa">LIPA NA M-PESA</h1>

        <h3 className="text-secondary">{product.product_name}</h3>
        <img
          src={img_url + product.product_photo}
          className="mt-4 eco"
          alt={product.product_photo}
        />

        <p className="text-danger"> Ksh .{product.product_cost}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn btn-secondary">
            Purchase
          </button>
        </form>
      </div>

    </div>
  );
};

export default Payment;
