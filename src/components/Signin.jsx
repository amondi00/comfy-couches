import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //feedback states
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //posting data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const response = await axios.post(
        "https://amondi00.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        setLoading("");
        console.log("Res" + response.data.user);
        setSuccess(response.data.message);
        navigate("/");
      } else {
        setSuccess(response.data.message);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className=" row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1> Sign in Form</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="email"
            placeholder=" Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            className="form-control"
            type="password"
            placeholder=" Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <button className=" btn bg-secondary" type="submit">
            Sign in
          </button>
          <p>
            Dont have an account<Link to="/signup">Sign up </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
