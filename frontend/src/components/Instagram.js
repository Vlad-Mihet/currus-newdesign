import React from "react";
import scInstagram from "@iconify/icons-ei/sc-instagram";
import { Icon, InlineIcon } from "@iconify/react";

const Instagram = () => {
  return (
    <div className="instagram">
      <img src="images/insta1.jpeg" />
      <img src="images/insta2.jpeg" />
      <img src="images/insta3.jpeg" />
      <img src="images/insta4.jpeg" />
      <img src="images/insta5.jpeg" />
      <img src="images/insta1.jpeg" />
      <img src="images/insta2.jpeg" />
      <img src="images/insta3.jpeg" />
      <img src="images/insta4.jpeg" />
      <img src="images/insta5.jpeg" />
      <img src="images/insta1.jpeg" />
      <img src="images/insta2.jpeg" />
      <img src="images/insta3.jpeg" />
      <img src="images/insta4.jpeg" />
      <img src="images/insta5.jpeg" />
      <div id="join">
        <a href="https://instagram.com/currusmotors" target="_blank">
          <Icon
            id="insta"
            icon={scInstagram}
            style={{ color: "#ffffff", fontSize: "26px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
