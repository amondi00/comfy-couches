import axios from "axios";
import React, { useState } from "react";

const AddCouches = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);
      const response = await axios.post(
        "https://amondi00.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.message) {
        setLoading("");
        setSuccess(response.data.message);
        setProductName("");
        setProductCost("");
        setProductDescription("");
        setProductPhoto("");
      }
    } catch (error) {
      setLoading("");
      setSuccess("");
      setError(error.message);
    }
  };
  return (
    <div className=" row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1> Add Couches</h1>
        {loading}
        {success}
        {error}
        <form class="product-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Couch name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <br />
          <textarea
            placeholder=" Description"
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />

          <br />
          <input
            type="number"
            placeholder="cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />

          <br />
          <input
            type="file"
            placeholder="Put desired image"
            className="form-control"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
            }}
          />
          <br />
          <button className="btn bg-secondary" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCouches;
