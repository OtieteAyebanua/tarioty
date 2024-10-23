import { Link } from "react-router-dom";
import { routes, socialMediaLinks } from "./routes";
import { GridLinesStyle, IsMenu, Navlist } from "./style";
import { DisplayCard } from "../../components/displayCard";
import { BurgerMenuIcon, GridLines, TariotyIcon } from "../../assets/icons";
import { useState } from "react";
import { Typography } from "@mui/material";
import { X } from "phosphor-react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div
      style={{
        paddingTop: "20px",
        position: "fixed",
        top: "0",
        width:'100%',
        zIndex: "10",
        backdropFilter: `blur(10px)`,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            paddingLeft: "30px",
            width: "60px",
            cursor: "pointer",
          }}
        >
          <TariotyIcon />
        </div>
        <Navlist>
          {routes.map((item) => {
            return (
              <Link id="navName" to={item.link}>
                {item.page}
              </Link>
            );
          })}
        </Navlist>
      </div>
    </div>
  );
};

export default Navbar;
