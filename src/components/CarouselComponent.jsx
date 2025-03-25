import React from 'react'
import './carousel.css'

const CarouselComponent = () => {
  return (
    <section className="row">
      <div className="col-md-12">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          {/* <!-- carousel items  --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="static/images/slide 3.webp"
                alt=""
                className="d-block w-100 carousel-image"
              />
            </div>
            <div className="carousel-item">
              <img
                src="static/images/slide 2.webp"
                alt=""
                className="d-block w-100 carousel-image"
              />
            </div>
            <img
              src="static/images/slide 4.webp"
              className="d-block w-100 carousel-image"
            />
            <div className="carousel-item"></div>
          </div>

          {/* <!-- controls  --> */}
          <a
            href="#mycarousel"
            data-bs-slide="prev"
            className="carousel-control-prev"
          >
            <span className="carousel-control-prev-icon bg-danger"></span>
          </a>
          <a
            href="#mycarousel"
            data-bs-slide="next"
            className="carousel-control-next"
          >
            <span className="carousel-control-next-icon bg-danger"></span>
          </a>
        </div>
      </div>
    </section>
    
  );
}

export default CarouselComponent