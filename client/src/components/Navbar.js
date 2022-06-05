import React from 'react'









export default function Navbar() {
    return (
        <div>
            <div className="navbar navbar navbar-expand-lg  navbar-light bg-light">
                <div className="navbar-logo-togggle">
                    <h3 className=' ms-2 mt-auto mb-auto'>NOTES OVERFLOW</h3>
                    <button class="navbar-toggler ms-auto me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-item-box">
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav navbar-item-link me-auto mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Clubs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Events</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
