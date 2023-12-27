import { nanoid } from "nanoid";

import Qa from "../assets/QualityAssurance.svg";
import Dev from "../assets/Development.svg";
import Ic from "../assets/Inventory-Control.svg";
import Tm from "../assets/TeamMnagement.svg";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const PageLinks = [
  { id: nanoid(), href: "#Home", text: "Home" },
  { id: nanoid(), href: "#About", text: "About" },
  { id: nanoid(), href: "#Skills", text: "Skills" },
  { id: nanoid(), href: "#Contact", text: "Contact" },
];

export const SocialLinks = [
  {
    id: nanoid(),
    href: "https://www.instagram.com/",
    icon: <FaInstagramSquare />,
  },
  {
    id: nanoid(),
    href: "https://www.facebook.com/",
    icon: <FaFacebookSquare />,
  },
  {
    id: nanoid(),
    href: "https://twitter.com/i/flow/login",
    icon: <FaTwitterSquare />,
  },
  {
    id: nanoid(),
    href:
      "https://www.linkedin.com/in/vaibhav-joshi-1a723512b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedinIn />,
  },
];

export const Skill = [
  {
    id: nanoid(),
    title: "Quality-Assurance",
    img: Qa,
    text:
      "Implementing rigorous quality control measure to ensure products meet the highest standard",
  },
  {
    id: nanoid(),
    title: "New Development",
    img: Dev,
    text:
      "Driving innovation through the creation of cutting-edge solutions and fetures",
  },
  {
    id: nanoid(),
    title: "Supply Chain Management",
    img: Ic,
    text:
      "Strategically managing inventory and fostering strong relationship with suppliers for seamless operations",
  },
  {
    id: nanoid(),
    title: "Team Leader",
    img: Tm,
    text:
      "Inspiring and motivating team member to achiew collective goals and exceed performance expectation",
  },
];

export const PrivateLinks = [
  {
    id: nanoid(),
    icon: <FaInstagramSquare />,
    text: "Instagram",
  },
  {
    id: nanoid(),
    icon: <FaWhatsapp />,
    text: "+91 9834061404",
  },
];
