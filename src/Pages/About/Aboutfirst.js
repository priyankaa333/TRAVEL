import React from 'react'
import './Aboutfirst.css'
import { LiaTripadvisor } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { BsPersonHeart } from "react-icons/bs";
const Aboutfirst = () => {
  return (
    <div className='testimoni'>
        <h2 className="testimoni-heading"> To know About US</h2>
        <div className="testimoni-container">          
            <div className="testimoni-card">
                <div className="star">
                  <i><LiaTripadvisor /></i>
                </div> 
                <div>
                    <h3 className="testimoni-name">Exclusive Trip</h3>
                </div>
                <p className="testimoni-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
            </div>
        
            <div className="testimoni-car">
                <div className="star">
                    <i> <AiOutlineSafety /></i>
                </div>
                <div>
                    <h3 className="testimoni-name">Safety First Always</h3>
                </div>
                <p className="testimoni-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
            </div>
        
            <div className="testimoni-card">
                <div className="star">
                    <i> <BsPersonHeart /></i>
                </div>
                <div>
                    <h3 className="testimoni-name">Professional Guide</h3>
                </div>
                <p className="testimoni-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutfirst