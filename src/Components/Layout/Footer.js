import React from "react";
import Facebooklogo from "../../assests/Facebooklogo.png";
import Youtubelogo from "../../assests/YouTubelogo.jpg";
import Spotifylogo from "../../assests/Spotifylogo.jpg";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="mainFooter">
      <span className="footerImage">The Generics</span>
      <div className="images">
        <a href="https://www.youtube.com/" target="blank">
          <img src={Youtubelogo} alt="Youtube Logo" className="youtube" />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <img src={Spotifylogo} alt="Spotify logo" className="spotify" />
        </a>

        <a href="www.facebook.com">
          <img src={Facebooklogo} alt="Facebook Logo" className="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
