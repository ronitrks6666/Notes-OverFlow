import React, { useState } from "react";
import carousel1 from "../img/carousel-1.jpg";








export default function SelectCollege() {

    const [inputText, setinputText] = useState('')



   


    function searchCollege(e){
        e.preventDefault()
        console.log(inputText)
    }
    return (
        <div className="SelectCollege-box">
            <div className="selectCollege-carousel">
                <img className="carousel-img" src={carousel1} alt="" />

                <div className="carousel-img-input-b">
                    <div class="carousel-input-container">
                        <h1 class="heading">Enter your College here </h1>
                        
                        <form onSubmit={searchCollege}>
                            <div class="searchInputWrapper">
                            <input
                                class="searchInput"
                                type="text"
                                placeholder="focus here to search"
                                value={inputText}
                                onChange={e => setinputText(e.target.value)}
                            />
                            <i class="searchInputIcon fa fa-search"></i>
                        </div>
                            <button style={{display:"none"}} type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
