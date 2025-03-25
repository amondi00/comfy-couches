
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //feedback system
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //fetching data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("password", password);

      //posting the data

      const response = await axios.post(
        "https://amondi00.pythonanywhere.com/api/signup",
        formData
      );
      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className=" row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1> Sign up Form</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          {/**username input */}
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          {/**phone input */}
          <input
            type="tel"
            placeholder="Enter phone"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          {/**email input */}
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {/**password input */}
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="bg-secondary btn" type="submit">
            Sign up
          </button>
          <br />
          {/**if one already has an account,link the signin page to the sign up page  */}
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
