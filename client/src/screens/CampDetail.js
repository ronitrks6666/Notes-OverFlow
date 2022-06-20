import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CampGetAction } from "../actions/aEarnAction";
import trophy from "../img/trophy.jpg";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CampForm from "../components/CampForm";
import CongratPage from "../components/CongratPage";

export default function CampDetail() {
  const dispatch = useDispatch();
  const oneCamp = useSelector((state) => state.getOneCampReducer);
  const { campitem, loading, error } = oneCamp;
  console.log(campitem);
  useEffect(() => {
    const id = localStorage.getItem("CAMP_ID");
    dispatch(CampGetAction(id));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="camp-content-box">
          <div className="task-box camp-task-box">
            <div className="task-img-box">
              <img className="task-img" src={trophy} alt="" />
            </div>
            <div className="task-content-box">
              <div className="task-text text-center">
                <h4>{campitem.title}</h4>
                <p>{campitem.subtitle}</p>
              </div>
              <div className="task-action">
                <div className="t-a-reward-amount">
                  <span className="money-amount">{campitem.amount}</span>
                  <div className="amount-currency">Rupee</div>
                </div>
              </div>
            </div>
          </div>

          <div className="camp-bottom-box">
            <CampForm />

            <div className="camp-detail">
              <div className="camp-detial-heading">
                IMORTANT INSTRUCTIONS
              </div>
              <div dangerouslySetInnerHTML={{ __html: campitem.detail }}></div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
}
