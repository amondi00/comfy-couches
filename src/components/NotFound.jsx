import React from "react";
import { useNavigate } from "react-router-dom";
import pic from './notfound.avif'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>The url you enetered was not found</h1>
      <img src={pic} className="pic" alt="not found" /> <br /> <br />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="button"
      >
        Return home
      </button>
    </div>
  );
};

export default NotFound;
