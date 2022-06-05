import React from 'react'
import carousel1 from '../img/carousel-1.jpg'







export default function SelectCollege() {
    return (
        <div className='SelectCollege-box'>
            <div className="selectCollege-carousel">
                
                    <img className="carousel-img" src={carousel1} alt="" />
                
                <div className="carousel-img-input-b">
                    <div class="carousel-input-container">
                        <h1 class="heading">Enter your College here </h1>
                        <div class="searchInputWrapper">
                            <input class="searchInput" type="text" placeholder='focus here to search'/>
                            <i class="searchInputIcon fa fa-search"></i>     
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
