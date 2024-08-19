import Instagram from "../../assets/svgs/instagram.svg";
import Linkedin from "../../assets/svgs/linkedin.svg";
import X from "../../assets/svgs/x.svg";
import ShadowInstagram from "../../assets/svgs/shadowInstagram..svg";
import ShadowLinkedin from "../../assets/svgs/shadowLinkedin.svg";
import ShadowX from "../../assets/svgs/shadowX.svg";

export const routes = [
  {
    page: "ABOUT",
    link: "/about",
  },
  {
    page: "SERVICES",
    link: "/services",
  },
  {
    page: "CONTACT",
    link: "/contact",
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
