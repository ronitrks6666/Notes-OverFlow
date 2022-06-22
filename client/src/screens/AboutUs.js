import React from "react";










export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-box">
        <div className="au-head">
          <h2>Hello!</h2>
        </div>
        <div className="au-body">
          <div className="au-body-text">
            <h4>
              I'm glad that you came here to know about us.
            </h4>
            <h5>Before that , lets know about you.</h5>
          </div>
          <div className="au-body-action">
            <div className="au-action-text">
              <h5>Contact us | Collaborate with us </h5>
            </div>
            <div className="au-action-method">
              <button className="btn btn-danger">
                <a href="">Gmail</a>
              </button>
              <button className="btn btn-success mx-2">
                <a href="">WhatsApp</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
