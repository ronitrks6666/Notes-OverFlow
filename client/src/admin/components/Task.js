import React from 'react'
import trophy from '../../img/trophy.jpg'







export default function Task() {
  return (
    
        <div className="task-box">
            <div className="task-img-box">
                <img className='task-img' src={trophy} alt="" />
            </div>
            <div className="task-content-box">
            <div className="task-text text-center">
                <h4>Open ICICI demat account for free.</h4>
                <p>Enjoy seemless trading plus get reward from us</p>
            </div>
            <div className="task-action">
                <div className="t-a-reward-amount">
                    <span className='money-amount'>350</span>
                    <div className='amount-currency'>Rupee</div>
                </div>
                <div className="t-a-btn">
                    <button className="btn task-start-btn">Get Started</button>
                </div>
            </div>
            </div>
           
        </div>
    
  )
}
