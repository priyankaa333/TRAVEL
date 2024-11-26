import React from "react";
import "./TeamSection.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const guides = [
  {
    name: "Maria Prova",
    role: "Tourist Guide",
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    background: "https://cdn.wallpapersafari.com/78/25/JU9bGD.jpg",
  },
  {
    name: "Rebeka Maliha",
    role: "Tourist Guide",
    image: "https://images.pexels.com/photos/29498893/pexels-photo-29498893/free-photo-of-woman-photographing-in-forest-path-with-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    background: "https://th.bing.com/th/id/OIP.sai2ObyFIip8dObZmSgEVQHaFj?rs=1&pid=ImgDetMain",
  },
  {
    name: "Alif Mahmud",
    role: "Tourist Guide",
    image: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65746.jpg",
    background: "https://i.pinimg.com/originals/d9/28/46/d928466ec89af483d0ba559aacf1de2d.jpg",
  },
  {
    name: "Alif Mahmud",
    role: "Tourist Guide",
    image: "https://cdn.pixabay.com/photo/2019/12/23/08/15/orange-jacket-4714097_1280.jpg",
    background: "https://cdn.pixabay.com/photo/2023/05/03/19/57/passau-7968535_960_720.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="cards-container">
        {guides.map((guide, index) => (
          <div className="card" key={index}>
            <div
              className="card-background"
              style={{ backgroundImage: `url(${guide.background}) `}}
            ></div>
            <div className="card-content">
              <img src={guide.image} alt={guide.name} className="profile-image" />
              <h3>{guide.name}</h3>
              <p>{guide.role}</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/login.php"> <FaFacebook /></a>
                <a href="https://x.com/i/flow/login"> <FaTwitter /></a>
                <a href="https://in.linkedin.com/"> <FaLinkedin /></a>
                <a href="https://www.instagram.com/"> <FaInstagram /></a>
                <a href="https://www.youtube.com/"> <FaYoutube /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;