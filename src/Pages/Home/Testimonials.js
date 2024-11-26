import React from 'react'
import { FaStar } from "react-icons/fa";
import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h2 className="testimonial-heading">Tourist Feedback</h2>
        <div className="testimonial-container">
            
            <div className="testimonial-card">
                <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <p className="testimonial-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className="testimonial-author">
                    <img src="https://th.bing.com/th/id/OIP.TlJR35GoCeLV0KZNEH2PSAHaK5?w=206&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="testimonial-avatar"/>
                    <div>
                        <h3 className="testimonial-name">John Honay</h3>
                        <p className="testimonial-role">Marketing manger</p>
                    </div>
                </div>
            </div>
        
            <div className="testimonial-card">
                <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <p className="testimonial-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className="testimonial-author">
                    <img src="https://th.bing.com/th/id/OIP.Qfa0q9vUhj6bTLaHEc_w-QHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="testimonial-avatar"/>
                    <div>
                        <h3 className="testimonial-name">John Honay</h3>
                        <p className="testimonial-role">Marketing manger</p>
                    </div>
                </div>
            </div>
        
            <div className="testimonial-card">
                <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <p className="testimonial-feedback">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <div className="testimonial-author">
                    <img src="https://th.bing.com/th/id/OIP.M-DhtYsxLmRMkbHxbXYyQQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="testimonial-avatar"/>
                    <div>
                        <h3 className="testimonial-name">John Honay</h3>
                        <p className="testimonial-role">Marketing manger</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials