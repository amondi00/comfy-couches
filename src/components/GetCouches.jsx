import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CarouselComponent from "./CarouselComponent";
import Footer from "./Footer";

const Home = () => {
  const [couches, setCouches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const img_url = "https://amondi00.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  const getcouches = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://amondi00.pythonanywhere.com/api/get_product_details"
      );
      setCouches(response.data.product);
      setSuccess("Couches loaded successfully!");
    } catch (error) {
      setError("Failed to load couches. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getcouches();
  }, []);

  // Filter couches based on search query
  const filteredCouches = couches.filter((couch) =>
    couch.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid row">
      <CarouselComponent />
      <h1>Explore couches</h1>

      {/* Display messages */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search for a couch..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
        />
      </div>

      {filteredCouches.map((couch, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-2">
            <img
              className="product_img"
              src={img_url + couch.product_photo}
              alt={couch.product_photo}
            />
            <div className="card-body">
              <h5 className="mt-2">{couch.product_name}</h5>
              <p className="text-muted">
                {couch.product_description.slice(0, 60)}
              </p>
              <b className="text-">Ksh {couch.product_cost}</b> <br />
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/payment", { state: { couch } })}
              >
                Show Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
