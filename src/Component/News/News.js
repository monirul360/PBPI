import React from "react";
import { Link } from "react-router-dom";
import img from "./../../Image/Slider/1.jpg";
const News = () => {
  return (
    <>
      <section className="py-5 news-content">
        <div className="tittle">
          <h1>Latest News</h1>
          <p>Stay informed and read the latest news of PBPI</p>
        </div>
        <div className="container py-5">
          <div className="row">
            {/* items start */}
            <div className="col-md-6">
              <div className="items">
                <img className="img-fluid" src={img} alt="" />
                <div className="items-tittle p-4">
                  <h3>ডুয়েটে ডিজিটাল বাংলাদেশ দিবস উদযাপিত</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between link p-4">
                  <div className="text">
                    <i className="far fa-calendar-alt color-red mr-1"></i>
                    <strong> NOVEMBER 12, 2022</strong>
                  </div>
                  <div>
                    <Link to="#">
                      <strong>VIEW MORE</strong>
                      <i class="fas fa-chevron-right text-2 pl-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* items end */}
            {/* items start */}
            <div className="col-md-6">
              <div className="items">
                <img className="img-fluid" src={img} alt="" />
                <div className="items-tittle p-4">
                  <h3>ডুয়েটে ডিজিটাল বাংলাদেশ দিবস উদযাপিত</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between link p-4">
                  <div className="text">
                    <i className="far fa-calendar-alt color-red mr-1"></i>
                    <strong> NOVEMBER 12, 2022</strong>
                  </div>
                  <div>
                    <Link to="#">
                      <strong>VIEW MORE</strong>
                      <i class="fas fa-chevron-right text-2 pl-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* items end */}
            {/* items start */}
            <div className="col-md-6">
              <div className="items">
                <img className="img-fluid" src={img} alt="" />
                <div className="items-tittle p-4">
                  <h3>ডুয়েটে ডিজিটাল বাংলাদেশ দিবস উদযাপিত</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between link p-4">
                  <div className="text">
                    <i className="far fa-calendar-alt color-red mr-1"></i>
                    <strong> NOVEMBER 12, 2022</strong>
                  </div>
                  <div>
                    <Link to="#">
                      <strong>VIEW MORE</strong>
                      <i class="fas fa-chevron-right text-2 pl-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* items end */}
            {/* items start */}
            <div className="col-md-6">
              <div className="items">
                <img className="img-fluid" src={img} alt="" />
                <div className="items-tittle p-4">
                  <h3>ডুয়েটে ডিজিটাল বাংলাদেশ দিবস উদযাপিত</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between link p-4">
                  <div className="text">
                    <i className="far fa-calendar-alt color-red mr-1"></i>
                    <strong> NOVEMBER 12, 2022</strong>
                  </div>
                  <div>
                    <Link to="#">
                      <strong>VIEW MORE</strong>
                      <i class="fas fa-chevron-right text-2 pl-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* items end */}
          </div>
          <Link className="view-news my-5 mb-2" to="/">
            View All News
          </Link>
        </div>
      </section>
    </>
  );
};

export default News;
