import React from "react";
import "./ServicesData.css";

const services = [
  {
    id: 1,
    title: "Photo Shoot",
    listings: "20 Listing",
    image: "https://www.thetopvillas.com/blog/wp-content/uploads/2021/11/Webp.net-resizeimage-2021-11-17T092610.027-1.jpg",
  },
  {
    id: 2,
    title: "Tour Guide",
    listings: "22 Listing",
    image: "https://th.bing.com/th/id/OIP.PhJZ3bG_3gRcvHqDcmtNlgHaFY?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Cozy Event",
    listings: "23 Listing",
    image: "https://i.pinimg.com/originals/45/f7/9c/45f79cd93ca84923260a174660fec08e.jpg",
  },
  {
    id: 4,
    title: "Interesting Rest",
    listings: "24 Listing",
    image: "https://image.ibb.co/cUWuoz/mermaid_restaurant_vegas_inside_supplied_silverton_casino.jpg",
  },
  {
    id: 5,
    title: "Kayaking",
    listings: "25 Listing",
    image: "https://www.pandotrip.com/wp-content/uploads/2015/07/Top-10-Kayaking-Norway2.jpg",
  },
  {
    id: 6,
    title: "Safe Flight",
    listings: "26 Listing",
    image: "https://www.graveltravel.com/cdn/shop/articles/have-a-safe-flight-airplane-in-sky.jpg?v=1671819174&width=1500",
  },
  {
    id: 7,
    title: "Entertainment",
    listings: "27 Listing",
    image: "https://www.popoptiq.com/wp-content/uploads/2019/01/1-26-1.jpg",
  },
  {
    id: 8,
    title: "Delicious Food",
    listings: "28 Listing",
    image: "https://th.bing.com/th/id/OIP.sKDGUtU9v18Iop1szIxJhgHaEo?rs=1&pid=ImgDetMain",
  },
];

const ServiceData = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Amazing Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-listings">{service.listings}</p>
            <button className="service-button"> <a href="/contact"> Book Now </a></button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceData;
