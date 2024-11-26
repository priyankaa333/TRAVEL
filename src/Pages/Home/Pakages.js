import React from "react";
import "./Packages.css";

const tours = [
  { id: 1, name: "Bhutan Tours", imgSrc: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2011/05/bhutan-1200x853.jpg" },
  { id: 2, name: "Thailand Tours", imgSrc: "https://th.bing.com/th/id/OIP.kY3JsT84m5ntyBOSg-wyZwHaEo?w=1000&h=625&rs=1&pid=ImgDetMain" },
  { id: 3, name: "Nepal Tours", imgSrc: "https://www.snowleopardtrek.com/wp-content/uploads/2015/06/nepal-patan-24.jpg" },
  { id: 4, name: "Dubai Tours", imgSrc: "https://th.bing.com/th/id/R.9b272747f1bbd00495596c4f98f92924?rik=zZMa4UZ5hj3Uhg&riu=http%3a%2f%2fwww.worldalldetails.com%2farticle_image%2fdubai_burj_khalifa_089610.jpg&ehk=nSNMKgTtBk3AXWtF2On03MqTxKkG%2b4Fg3C6bLcKog4g%3d&risl=&pid=ImgRaw&r=0" },
  { id: 5, name: "Malaysia Tours", imgSrc: "https://th.bing.com/th/id/R.5138e3e468bdddeba8cdd8363b844f89?rik=7DF%2fQeObs%2bcxhA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-bY6R8P3-bR4%2fTukzgTOG9SI%2fAAAAAAAAJXs%2fa23Rl5guklk%2fs1600%2fkuala-lumpur-mandarian-hotel.jpg&ehk=g1JQW%2fIyj13or3nlilkuSBGc5senX2EvPyw3vqVOURo%3d&risl=&pid=ImgRaw&r=0" },
  { id: 6, name: "Maldives Tours", imgSrc: "https://i.pinimg.com/originals/72/29/d0/7229d0861e8c5a9e9ed6178db008926f.jpg" },
  { id: 7, name: "Indonesia Tours", imgSrc: "https://lp-cms-production.imgix.net/2019-06/d7ecf43d5c78652daaab5e0256d1bc50-prambanan-temple.jpg?q=40&w=2000&auto=format" },
  { id: 8, name: "Singapore Tours", imgSrc: "https://th.bing.com/th/id/OIP.Hm98Pvm1RT-hFVSjOiJUeAHaE6?w=1024&h=680&rs=1&pid=ImgDetMain" },
  { id: 9, name: "Vietnam Tours", imgSrc: "https://blog.akbartravels.com/wp-content/uploads/2022/10/Shutterstock_2199842613-1.jpg" },
  { id: 10, name: "Hong Kong Tours", imgSrc: "https://th.bing.com/th/id/R.69592d4007066eb50a8bcc9792b7430c?rik=UFpbLfO%2bgWKbmA&riu=http%3a%2f%2fblog.raynatours.com%2fwp-content%2fuploads%2f2017%2f07%2ftemple-street-night-market-hong-kong.jpg&ehk=ZFGhoBVD%2bVIPtrpf8IHI0%2b%2bvfRZibdnBrFeV7LnunrE%3d&risl=&pid=ImgRaw&r=0" },
  
];

const Packages = () => {
  return (
    <div className="grid-container">
      {tours.map((tour) => (
        <div key={tour.id} className="grid-item">
          <img src={tour.imgSrc} alt={tour.name} />
          <p>{tour.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Packages;
