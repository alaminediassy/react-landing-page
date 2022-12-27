import React from "react";
import "./Services.css";

const Services = () => {
  return(
      <section>
          <div className="container">
              <h2>Our Services</h2>
              <div className="row">
                  <div className="service">
                      <i className="fa-solid fa-laptop-code"></i>
                      <h3>Web Developement</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry Lorem.
                      </p>
                  </div>
                  <div className="service">
                      <i className="fa-solid fa-display"></i>
                      <h3>Web Design</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry Lorem.
                      </p>
                  </div>
                  <div className="service">
                      <i className="fa-solid fa-palette"></i>
                      <h3>Brand Identity</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.
                      </p>
                  </div>
                  <div className="service">
                      <i className="fa-brands fa-figma"></i>
                      <h3>UX/UI Design</h3>
                      <p>
                          Lorem dummy text of the printing and
                          industry Lorem Ipsum has been.
                      </p>
                  </div>
                  <div className="service">
                      <i className="fa-brands fa-digital-ocean"></i>
                      <h3>Digital Stratigy</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.
                      </p>
                  </div>
                  <div className="service">
                      <i className="fa-solid fa-chart-line"></i>
                      <h3>Marketing</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          industry.
                      </p>
                  </div>


              </div>
          </div>
      </section>
  )
}

export default Services;