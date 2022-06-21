import React from 'react'
import { Link } from "react-router-dom";








export default function Navbar() {
    return (
        <div>
            <div className="navbar navbar navbar-expand-lg  navbar-light bg-light">
                <div className="navbar-logo-togggle">
                    
                    <h3 className=' ms-2 mt-auto mb-auto'> <Link to="">NOTES OVERFLOW</Link> </h3>
                    <button class="navbar-toggler ms-auto me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-item-box">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav navbar-item-link me-auto mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">Clubs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/earn" tabindex="-1" aria-disabled="true">Earn</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
