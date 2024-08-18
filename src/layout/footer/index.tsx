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
        <Navlist>
          {socialMediaLinks.map((item) => (
            <Link id="navShadowlink" to={item.link}>
              <div className="imgNav">
              <img src={item.name} width={20} id="navImg"/>
                <div id="line"></div>
                <div id="imgShadow">{item.shadow}</div>
              </div>
            </Link>
          ))}
        </Navlist>
      </FooterContainer>
    </DisplayCard>
  );
};

export default Footer;
