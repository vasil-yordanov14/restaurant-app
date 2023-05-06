import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "48px" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "32px 0" }}
        >
          opening hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "32px" }}>
        Visit us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find-us" />
    </div>
  </div>
);

export default FindUs;
