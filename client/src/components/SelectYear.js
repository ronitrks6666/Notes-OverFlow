import React from "react";
import { Link } from "react-router-dom";
import oneIcon from "../img/1-icon.png";
import twoIcon from "../img/2-icon.jpg";
import threeIcon from "../img/3-icon.png";
import fourIcon from "../img/4-icon.png";
import boySittingLaptop from "../img/boy-sitting-laptop.png";

export default function SelectYear() {
  // to check if college is present in local storage
  let college = localStorage.getItem("NOF_COLLEGE")
    ? localStorage.getItem("NOF_COLLEGE")
    : (window.location.href = "/");

  return (
    <div className="container select-year w-100">
      <div className="select-year-content">
        <div className="year-icon-box">
          <img className="boy-sitting-img" src={boySittingLaptop} alt="" />
        </div>

        <div className="year">
          <div className="select-year-heading w-100">
            <h3>Select your year</h3>
          </div>
          <div className="year-num">
            <Link to="/note?year=1&sem=1">
              <img src={oneIcon} className="year-num-img" alt="" />
            </Link>
          </div>
          <div className="year-num">
            <Link to="/note?year=2&sem=1">
              <img src={twoIcon} className="year-num-img" alt="" />
            </Link>
          </div>
          <div className="year-num">
            <Link to="/note?year=3&sem=1">
              <img src={threeIcon} className="year-num-img" alt="" />
            </Link>
          </div>
          <div className="year-num">
            <Link to="/note?year=4&sem=1">
              <img src={fourIcon} className="year-num-img" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
