import React from 'react'
import memoriesCSS from './../../Pages/Home/Memories.module.css';

import MemoriesImg1 from './../../Components/assets/travelport1.jpg'
import MemoriesImg2 from './../../Components/assets/travelport2.jpg'
import MemoriesImg3 from './../../Components/assets/travelport3.jpg'
import MemoriesImg4 from './../../Components/assets/travelport4.jpg'
import MemoriesImg5 from './../../Components/assets/travelport5.jpg'
import MemoriesImg6 from './../../Components/assets/travelport6.jpg'
import MemoriesImg7 from './../../Components/assets/travelport7.jpg'



const Items = () => {
  return (
    <div className={`${memoriesCSS.Memories_Wrapper} section`}>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg1} alt="Itemsimg1" />

            <div className={memoriesCSS.content}>
                <h3>Small Groups Depurtures</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg2} alt="Itemsimg2" />

            <div className={memoriesCSS.content}>
                <h3>Affordable Dreams</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg3} alt="Itemsimg3" />

            <div className={memoriesCSS.content}>
                <h3>Undiscovers Tours</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg4} alt="Itemsimg4" />

            <div className={memoriesCSS.content}>
                <h3>Let Our Experts pan <br /> Your Journey</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg5} alt="Itemsimg5" />

            <div className={memoriesCSS.content}>
                <h3>Religious Tours</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg6} alt="Itemsimg6" />

            <div className={memoriesCSS.content}>
                <h3>Solo Travel</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
        <div className={memoriesCSS.MemoriesCard}>
            <img src={MemoriesImg7} alt="Itemsimg7" />

            <div className={memoriesCSS.content}>
                <h3>Private Touring</h3>
                <button><a href="/tours">view Tours</a></button>
            </div>
        </div>
    </div>
  )
}

export default Items