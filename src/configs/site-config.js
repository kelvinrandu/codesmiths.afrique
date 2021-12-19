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
        url: "https://github.com/devMuangi",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/devmuangi/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://twitter.com/devMuangi",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      }
    ]
  }
};

export default siteConfig;
