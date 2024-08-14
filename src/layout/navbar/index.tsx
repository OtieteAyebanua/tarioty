import { Link } from "react-router-dom";
import { routes, socialMediaLinks } from "./routes";
import { GridLinesStyle, IsMenu, NavbarContainer, Navlist } from "./style";
import { DisplayCard } from "../../components/displayCard";
import { BurgerMenuIcon, GridLines, TariotyIcon } from "../../assets/icons";
import { useState } from "react";
import { Typography } from "@mui/material";
import { X } from "phosphor-react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <DisplayCard backgroundColor={"#0A0A0A"}>
      <NavbarContainer>
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
              <div className="navNames">
                <p id="navName">{item.name}</p>
                <div id="line"></div>
                <div id="navNameShadow">{item.name}</div>
              </div>
            </Link>
          ))}
        </Navlist>
        <div id="burgerMenu">
          <div
            onClick={() => {
              setIsMenu(true);
            }}
          >
            <BurgerMenuIcon />
          </div>

          {isMenu ? (
            <DisplayCard>
              <IsMenu>
                <GridLinesStyle>
                  <GridLines />
                </GridLinesStyle>
                <X
                  size={32}
                  color="#EDEDED"
                  className="close"
                  onClick={() => {
                    setIsMenu(false);
                  }}
                />
                <div>
                  {routes.map((item) => (
                    <Link to={item.link} className="link">
                      <Typography className="mobileLink">
                        {item.page}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </IsMenu>
            </DisplayCard>
          ) : null}
        </div>
      </NavbarContainer>
    </DisplayCard>
  );
};

export default Navbar;
