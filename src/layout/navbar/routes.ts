import Instagram from "../../assets/svgs/instagram.svg";
import Linkedin from "../../assets/svgs/linkedin.svg";
import X from "../../assets/svgs/x.svg";
import ShadowInstagram from "../../assets/svgs/shadowInstagram..svg";
import ShadowLinkedin from "../../assets/svgs/shadowLinkedin.svg";
import ShadowX from "../../assets/svgs/shadowX.svg";

export const routes = [
  {
    page: "Create With Us",
    link: "/create-with-us",
  },
  {
    page: "Projects",
    link: "/projects", 
  },
  {
    page: "About Us",
    link: "/about-us",
  },
  {
    page: "Join Our Team",
    link: "/join-our-team",
  },
];

export const socialMediaLinks = [
  {
    name: Instagram,
    shadow: ShadowInstagram,
    link: "",
  },
  {
    name: X,
    shadow: ShadowX,
    link: "",
  },
  {
    name: Linkedin,
    shadow: ShadowLinkedin,
    link: "",
  },
];
