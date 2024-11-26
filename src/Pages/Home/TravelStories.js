import React from "react";
import "./TravelStories.css";

const stories = [
  {
    date: "October 10, 2024",
    title: "18 Best Winter Holiday Destinations in India",
    image: "https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2020/8/4/family-holiday.jpg",
  },
  {
    date: "October 1, 2024",
    title: "10 Popular Buddhist Temples to Visit in India",
    image: "https://blog.japanwondertravel.com/wp-content/uploads/2020/03/BIg-Buddha-Kamakura-1200x868.jpg", 
  },
  {
    date: "August 20, 2024",
    title: "10 Best Temples to Visit in Rishikesh, Uttarakhand",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Tera-Manzil-Temple-.jpg", 
  },
];

const TravelStories = () => {
  return (
    <div className="travel-stories">
      <h2 className="title">Our Latest Travel Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-content">
              <p className="story-date">{story.date}</p>
              <h3 className="story-title">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelStories;
