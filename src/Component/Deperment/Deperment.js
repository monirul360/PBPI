import React from "react";

const Deperment = () => {
  return (
    <>
      <section className="department">
        <div className="tittle">
          <h2>Our Department</h2>
          <p>At present there are four Department in the PBPI</p>
        </div>
        <div className="department-content">
          {/* cmd */}
          <div className="department-items">
            <div className="icon">
              <i className="fa fa-book"></i>
            </div>
            <div className="text">
              <h3>Computer Science</h3>
            </div>
          </div>
          {/* cmd */}
          {/* cmd */}
          <div className="department-items">
            <div className="icon">
              <i className="fa fa-book"></i>
            </div>
            <div className="text">
              <h3>Civil Technology</h3>
            </div>
          </div>
          {/* cmd */}
          {/* cmd */}
          <div className="department-items">
            <div className="icon">
              <i className="fa fa-book"></i>
            </div>
            <div className="text">
              <h3>Electritrical Technology</h3>
            </div>
          </div>
          {/* cmd */}
          {/* cmd */}
          <div className="department-items">
            <div className="icon">
              <i className="fa fa-book"></i>
            </div>
            <div className="text">
              <h3>Fashion Design </h3>
            </div>
          </div>
          {/* cmd */}
        </div>
      </section>
    </>
  );
};

export default Deperment;
