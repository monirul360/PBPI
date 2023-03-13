import React from "react";
import { Link } from "react-router-dom";
import img from "./../../Image/campus.jpeg";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="text">
                <h2 className="mb-3">
                  About <span className="text-danger fw-bold">US</span>
                </h2>
                <h5 className="mb-4">
                  Welcome to Purbo Bogra Polytechnic Institute (PBPI)
                </h5>
                <p>
                  Engineering has existed since ancient times, when humans
                  devised inventions such as the wedge, lever, wheel and pulley,
                  etc. The term engineering is derived from the word engineer,
                  which itself dates back to the 14th century when an engineer
                  (literally, one who builds or operates a siege engine)
                  referred to “a constructor of military engines.
                </p>
                <Link to="/">READ MORE</Link>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
