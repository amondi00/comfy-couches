import React, { useState } from "react";


const NewsletterSignup = () => {
  // State to manage email input, submission status, and error
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear any previous error message
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter an email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate submitting email to a backend or service
    setIsSubmitted(true);
    setEmail("");
    setError("");
    // Here you can call an API or backend to send the email
    console.log("Email submitted:", email); // For debugging

    // Reset the form after submission
    // Optionally, display a success message
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Sign up for Our Newsletter</h2>
      <p>Stay updated with the latest news and offers from Couch Haven!</p>

      {isSubmitted ? (
        <div>
          <h3>Thank you for signing up!</h3>
          <p>You will receive the latest updates in your inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              style={{
                padding: "10px",
                fontSize: "16px",
                width: "80%",
                maxWidth: "400px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
