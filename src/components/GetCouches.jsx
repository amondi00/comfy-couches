import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetCouches = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 100000 });

  const navigate = useNavigate();
  const img_url = "https://amondi00.pythonanywhere.com/static/images/";

  useEffect(() => {
    axios
      .get("https://amondi00.pythonanywhere.com/api/get_product_details")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // Filtering and Sorting Logic
  const filteredAndSortedProducts = products
    .filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      const cost = Number(product.product_cost);
      return cost >= priceFilter.min && cost <= priceFilter.max;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.product_cost - b.product_cost;
      if (sortOrder === "highToLow") return b.product_cost - a.product_cost;
      return 0;
    });

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Explore Couches</h1>

      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Price Filter */}
      <div className="d-flex align-items-center mb-3">
        <label className="me-2">Price Range:</label>
        <input
          type="number"
          placeholder="Min"
          value={priceFilter.min}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, min: Number(e.target.value) })
          }
          className="form-control me-2"
          style={{ width: "100px" }}
        />
        <input
          type="number"
          placeholder="Max"
          value={priceFilter.max}
          onChange={(e) =>
            setPriceFilter({ ...priceFilter, max: Number(e.target.value) })
          }
          className="form-control"
          style={{ width: "100px" }}
        />
      </div>

      {/* Sort Dropdown */}
      <div className="mb-4">
        <label className="me-2">Sort by:</label>
        <select
          className="form-select w-auto d-inline"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="row">
        {filteredAndSortedProducts.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={img_url + product.product_photo}
                className="card-img-top"
                alt={product.product_name}
                style={{
                  width: "100%", // ensures the image takes full width of the card
                  height: "250px", // sets a fixed height for all images
                  objectFit: "cover", // maintains aspect ratio and avoids stretching
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.product_description}</p>
                <p className="fw-bold">Ksh. {product.product_cost}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => navigate("/payment", { state: { product } })}
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCouches;
