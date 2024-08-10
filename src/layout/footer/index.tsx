import { Link } from "react-router-dom";
import { DisplayCard } from "../../components/displayCard";
import { routes, socialMediaLinks } from "../navbar/routes";
import { Navlist } from "../navbar/style";
import { FooterContainer } from "./style";
import { TariotyIcon } from "../../assets/icons";

const Footer = () => {
  return (
    <DisplayCard backgroundColor={"#0A0A0A"}>
      <FooterContainer>
        <Navlist>
          {routes.map((item) => {
            return (
              <Link id="navShadowlink" to={item.link}>
                <div className="navNames">
                  <p id="navName">{item.page}</p>
                  <div id="line"></div>
                  <div id="navNameShadow">{item.page}</div>{" "}
                </div>
              </Link>
            );
          })}
        </Navlist>
        <div id="img">
          <Link to={"*"}>
            <TariotyIcon />
          </Link>
        </div>
        <div className="social">
          {socialMediaLinks.map((item) => (
            <Link id="navShadowlink" to={item.link}>
              <div className="navNames">
                <p id="navName">{item.name}</p>
                <div id="line"></div>
                <div id="navNameShadow">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </FooterContainer>
    </DisplayCard>
  );
};

export default Footer;
