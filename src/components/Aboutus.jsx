import React from "react"; // Only once
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AboutusComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Couch Haven</h1>
      <p>
        Welcome to Couch Haven – Your Ultimate Destination for Comfortable
        Living At Couch Haven, we believe that your home should be a sanctuary
        where comfort and style come together to create the perfect atmosphere.
        That’s why we specialize in providing a curated selection of
        high-quality, stylish, and durable sofas and furniture that transform
        any space into a cozy haven.
        <h1 className="">Our Story</h1>
        <p>
          {" "}
          Founded with a passion for creating inviting and comfortable living
          spaces, Couch Haven started as a small venture with a big dream – to
          offer top-notch sofas that combine superior craftsmanship, exceptional
          comfort, and timeless style.
           Over the years, we’ve expanded our
          collection to include a wide range of sofas, from luxurious leather
          sets to versatile fabric options, ensuring we meet the unique needs
          and preferences of all our customers. 
          We’re committed to bringing you
          the best in modern design and traditional quality. Our team works
          closely with renowned manufacturers and artisans to provide products
          that enhance your home and enrich your life.
        </p>
        <h1>Our Mission </h1>
        <p>
          At Couch Haven, our mission is simple: to make your home a place of
          comfort, relaxation, and style. Whether you’re furnishing a new home
          or upgrading your current living space, we strive to make the process
          of finding the perfect sofa as enjoyable and stress-free as possible.
          We take pride in offering products that are not only aesthetically
          pleasing but are also built to stand the test of time.
        </p>
        <h1>What Sets Us Apart?</h1>{" "}
        <p>
          Quality & Durability: We believe that a sofa should not only look
          great but also stand up to daily use. That's why we source only the
          highest-quality materials, ensuring that every piece in our collection
          is built to last.
           Customer-Centered Approach: Your satisfaction is our
          priority. From easy-to-navigate online shopping to personalized
          customer service, we’re here to make sure you find the right piece for
          your space. 
          Our team is always ready to assist with any questions,
          ensuring your experience is seamless.
           Sustainable & Ethical Practices: We’re
          committed to sustainability and ethical sourcing. Our partners follow
          eco-friendly practices to minimize waste and carbon footprint, so you
          can feel good about your purchase.
        </p>
      </p>
    </div>
  );
};

export default AboutusComponent;
