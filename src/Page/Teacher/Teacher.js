import React from "react";
import img from "./../../Image/icon/man-user.svg";
const Teacher = () => {
  const member = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="container">
        <div className="teacher">
          <div className="text">
            <h3
              class="text-center
            mt-5 mb-0"
            >
              PBPI All Teacher{" "}
            </h3>
          </div>
          <div className="row py-5">
            {member.map(() => (
              <div class="col-lg-4 col-md-6">
                <div
                  class="rounded-3  shadow p-3 pt-4 m-2
                mb-4 text-center"
                >
                  <div>
                    <img
                      class="rounded-pill"
                      src={img}
                      alt=""
                      width="80px"
                      height="80px"
                    />
                    <p class="fw-bold mt-2">Angel Alianna</p>
                    <p class="">Computer instructor</p>
                    <p>
                      <b>Edu: BSC Enginner</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* teacher 1 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
