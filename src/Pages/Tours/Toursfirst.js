import React, {useState} from 'react'
import './Toursfirst.css'

const regions = ["North India", "South India", "East India", "West India"];

const destinations = [
  { name: "Uttarakhand", packages: "50+", image: "https://deih43ym53wif.cloudfront.net/Swargarohini-trek-uttarakhand-blooming-valley-this-chakratirth-india-flowers-shutterstock_1687487230.jpg_2308a61b17.jpg", region: "North India" },
  { name: "Rajasthan", packages: "30+", image: "https://static.vecteezy.com/system/resources/previews/011/084/232/large_2x/full-picture-of-hawa-mahal-of-rajasthan-photo.jpg", region: "North India" },
  { name: "Himachal", packages: "60+", image: "https://www.tripsavvy.com/thmb/zyqX35L3rgFRuVrbGioDKoqPezc=/2121x1414/filters:fill(auto,1)/GettyImages-930881934-5ae56fe48023b90036464e72.jpg", region: "North India" },
  { name: "Jammu & Kashmir", packages: "30+", image: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/08/Karsha-Gustor-Festival-in-Padum-Valley-of-Zanskar-Jammu-and-Kashmir.jpg", region: "North India" },
  { name: "Uttar Pradesh", packages: "25+", image: "https://images.news18.com/ibnlive/uploads/2022/12/untitled-design-3-20-167039075516x9.png", region: "South India" },
  { name: "Delhi", packages: "20+", image: "https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg", region: "South India" },
  { name: "Ladakh", packages: "25+", image: "https://img.traveltriangle.com/blog/wp-content/uploads/2015/08/cover-fro-9-Astounding-Treks-In-Ladakh-.jpg", region: "South India" },
  { name: "Kerala", packages: "40+", image: "https://www.bontravelindia.com/wp-content/uploads/2022/11/Munnar-Tourism-Kerala.jpg", region: "South India" },
  { name: "Tamil Nadu", packages: "35+", image: "https://blogs.revv.co.in/blogs/wp-content/uploads/2020/05/meenakshi-temple-in-Madurai.jpg", region: "East India" },
  { name: "Odisha", packages: "20+", image: "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/somnath-temple/Somnath-Temple-Thumbnail.jpg", region: "East India" },
  { name: "West Bengal", packages: "25+", image: "https://th.bing.com/th/id/R.1301c4e2fbf17eb05c95c8a63e8c8482?rik=dcbo3sWU0rKGdQ&riu=http%3a%2f%2fwww.trawell.in%2fimages%2fpics%2fwest-bengal_all_main.jpg&ehk=QLN6pUUSHD3BECAJew45zKGFJSPw%2bcrpiWabp5vpsDo%3d&risl=&pid=ImgRaw&r=0", region: "East India" },
  { name: "Goa", packages: "50+", image: "https://voiceofadventure.com/wp-content/uploads/2022/06/60d0813807aff-Baga_Beach_In_Goa.jpg", region: "East India" },
  { name: "Gujarat", packages: "30+", image: "https://deih43ym53wif.cloudfront.net/jain-temples-on-top-shatrunjaya-hill-gujarat-india-shutterstock_407717476.jpg_dcb0b5f7e6.jpg", region: "West India" },
  { name: "maharashtra", packages: "40+", image: "https://tripnxt.com/blog/wp-content/uploads/2020/01/tripnxt_gateway_of_india_mumbai.jpg", region: "West India" },
  { name: "pune", packages: "52+", image: "https://i.pinimg.com/originals/0f/67/eb/0f67eb672b9e06d118b11017e535fe71.jpg", region: "West India" },
  { name: "Daman&Diu", packages: "42+", image: "https://www.adotrip.com/public/images/state/master_images/5fc493901b83c-Daman_And_Diu_Attractions.jpg", region: "West India" },
];
const Toursfirst = () => {

  const [activeRegion, setActiveRegion] = useState("North India");

  const filteredDestinations = destinations.filter(
    (dest) => dest.region === activeRegion
  );



  return (
  <div className="tfirst">
    <h1>Explore Top Destinations by Region</h1>
    <div className="tabs">
      {regions.map((region) => (
        <button
          key={region}
          className={region === activeRegion ? "active" : ""}
          onClick={() => setActiveRegion(region)}
        >
          {region}
        </button>
      ))}
    </div>

    <div className="cardd-grid">
      {filteredDestinations.map((dest) => (
        <div className="cardd" key={dest.name}>
          <img src={dest.image} alt={dest.name} />
          <div className="cardd-overlay">
            <h3>{dest.name}</h3>
            <p>{dest.packages} PACKAGES</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Toursfirst