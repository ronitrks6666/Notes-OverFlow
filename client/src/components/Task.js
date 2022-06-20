import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import trophy from "../img/trophy.jpg";

export default function Task({ item }) {
  const dispatch = useDispatch();
  console.log(item);

  function getOneCamp(id) {
    localStorage.setItem("CAMP_ID", id);
  }

  return (
    <div className="task-box">
      <div className="task-img-box">
        <img className="task-img" src={trophy} alt="" />
      </div>
      <div className="task-content-box">
        <div className="task-text text-center">
          <h4>{item.title}</h4>
          <p>{item.subtitle}</p>
        </div>
        <div className="task-action">
          <div className="t-a-reward-amount">
            <span className="money-amount">{item.amount}</span>
            <div className="amount-currency">Rupee</div>
          </div>
          <div className="t-a-btn">
            <Link to="/campaigndetail">
              <button
                onClick={() => {
                  getOneCamp(item._id);
                }}
                className="btn task-start-btn"
              >
                {" "}
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
