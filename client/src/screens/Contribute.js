import React from "react";
import monsterimg from "../img/monster-cartoon-1.png";

export default function Contribute() {
  return (
    <div className="contribute">
      <div className="contribute-left-box">

        <div className="contri-left-img">
          <img src={monsterimg} alt="" />
        </div>
        <div className="contri-left-caption">
          <p>Feed Me with Notes</p>
          <h5>Thank You!</h5>
        </div>
      </div>
      <div className="contribute-right-box">

        <div className="contri-right-head text-center">
          <h1>Details</h1>
        </div>

        <div className="contri-right-form">

          <div className="contri-right-institute form-label-input">
            <label htmlFor="">Institute</label>
            <input type="text" name="" id="" />
          </div>

          <div className="contri-right-year-sem contri-from-f-box">
            <div className="contri-right-year form-label-input">
              <label htmlFor="">Year</label>
              <input type="text" />
            </div>

            <div className="contri-right-sem form-label-input">
              <label htmlFor="">Semester</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div className="contri-right-subject-link contri-from-f-box">

            <div className="contri-right-subject form-label-input">
              <label htmlFor="">Subject</label>
              <input type="text" name="" id="" />
            </div>

            <div className="contri-right-link form-label-input">
              <label htmlFor="">G-Drive Link</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div className="contri-button">
            <button className="btn btn-primary">Contribute</button>
          </div>

        </div>

      </div>
    </div>
  );
}
