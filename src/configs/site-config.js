import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} David Mwangi. All Rights Reserved.`,
  author: {
    name: "David  Mwangi",
    accounts: [
      {
        url: "https://github.com/kelvinrandu",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: " https://linkedin.com/in/kelvin-randu/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://twitter.com/kelvin_randu",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />,
      },
    ],
  },
};

export default siteConfig;
