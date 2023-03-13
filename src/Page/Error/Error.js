import React from "react";
import errorpic from "./../../Image/Error/1.png";
const Error = () => {
  return (
    <div>
      <div className="container my-5">
        <div>
          <img
            style={{ width: "370px", display: "block", margin: "auto" }}
            src={errorpic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
