import React from 'react'
import { Link } from 'react-router-dom';
import oneIcon from '../img/1-icon.png'
import twoIcon from '../img/2-icon.jpg'
import threeIcon from '../img/3-icon.png'
import fourIcon from '../img/4-icon.png'




export default function SelectYear() {
  return (
    <div className='container select-year w-100'>
         <div className="select-year-heading">
             <h3>Select your year</h3>
         </div>
         <div className="select-year-content">
             <div className="year-num"><Link to="/note?year=1"><img src={oneIcon} className='year-num-img' alt="" /></Link></div>
             <div className="year-num"><Link to="/note?year=2"><img src={twoIcon} className='year-num-img' alt="" /></Link></div>
             <div className="year-num"><Link to="/note?year=3"><img src={threeIcon} className='year-num-img' alt="" /></Link></div>
             <div className="year-num"><Link to="/note?year=4"><img src={fourIcon} className='year-num-img' alt="" /></Link></div>
         </div>
    </div>
  )
}
