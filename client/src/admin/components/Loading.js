import React from "react";










export default function Loading() {
  return (
    <div className="container text-center">
      {/* <div className="spinner-border" role="status" style={{width:"100px",height:"100px" ,marginTop:"100px"}}> */}
      <div class="loader rings">
            <span class="a"></span>

            <span class="b"></span>

            <span class="c"></span>
          </div>
     
    </div>
  );
}
