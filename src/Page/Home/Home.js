import React from "react";
import Deperment from "../../Component/Deperment/Deperment";
import News from "../../Component/News/News";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
  return (
    <>
      <div>
        <div className="tittle text-center py-5">
          <h1>Purbo Bogra Polytechnic Institute (PBPI)</h1>
          <h2 className="lead mt-4 text-">
            Top private Polytechnic Institute in Bogra
          </h2>
        </div>
      </div>
      {/* Slider */}
      <Slider></Slider>
      {/* Deperment */}
      <Deperment></Deperment>
      {/* News*/}
      <News></News>
    </>
  );
};

export default Home;
