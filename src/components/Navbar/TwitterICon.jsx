import React from "react";
import img3 from "../../assets/png/Landing/twitter (1).png";
import axios from "axios";
import API_HOST from "../../env";
export default function TwitterICon() {
  const handletwitter = () => {
    axios.get(`${API_HOST}/twitter`).then((res) => {
   

      window.location.replace(
        "https://api.twitter.com/oauth/authorize?oauth_token=" +
          res.data.body.split("&")[0].slice(12)
      );
    });
  };

  return (
    <div>
      <div onClick={() => handletwitter()} className="scicailsign">
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
