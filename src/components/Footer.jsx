import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5">
      <section className="row bg-secondary">
        <div className="col-md-4 text-light ">
          <h5> Contact Us</h5>
          <form action="mailto: barbraamondi0@gmail.com">
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-control"
            />
            <br />
            <textarea
              placeholder="Give us your feedback"
              className="form-control"
              rows="4"
            ></textarea>{" "}
            <br />
            <input
              type="submit"
              value="Send message"
              className="btn btn-outline-dark"
            />
          </form>
        </div>
        <div className="col-md-4 text-light">
          <h5 className="text-light text-center">Stay Connected</h5>
          <p className="text-dark">
            {" "}
            You can contact us on our social media handles;Facebook, Instagram
            and X
          </p>
          <a href="#">
            <img src="static/images/fb.png" alt="" />
          </a>
          <a href="#">
            <img src="static/images/in.png" alt="" />
          </a>
          <a href="">
            <img src="static/images/x.png" alt="" />
          </a>
          <br />
          Office hours:
          <ul>
            <li>Monday-Friday; 8:00am to 6:00pm</li>
            <li>Weekends; 9:00am to 4:00pm</li>
          </ul>
          <p>
            {" "}
            Call us on: +254 115186027 <br />
            +254 729645036
          </p>
        </div>
        <div className="footer-links col-md-4">
          <a href="/about">About</a>
          <p className="para1">
            At Couch Haven we believe that a couch is more than just a piece of
            furniture;it's the heart of your home. Our Mission; Our mission is
            to help you create the living space you've always dreamed of, with
            couches that bring comfort, style, and durability into your home.{" "}
            <br />
            Get in Touch If you have any questions or need assistance, don't
            hesitate
          </p>
        </div>
      </section>
      <section>
        <div className="footer-content bg-dark text-light">
          <p>&copy; 2025 Couch Haven. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

