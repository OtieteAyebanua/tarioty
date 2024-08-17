import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { DisplayCard } from "../displayCard";
import { AccordionDetailStyle, AccordionSummaryStyle } from "./style";
import { CaretRight, Check } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "WEBSITE DESIGN",
    price: "$100.00",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ector invite reesizing ",
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    isOpen: "panel1",
    packages: [
      {
        name: "Logo Design",
      },
      {
        name: "Branding Guidelines",
      },
      {
        name: "Basic Stationary Design",
      },
    ],
  },
  {
    name: "WEBSITE DESIGN",
    price: "$100.00",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ector invite reesizing ",
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    isOpen: "panel2",
    packages: [
      {
        name: "Logo Design",
      },
      {
        name: "Branding Guidelines",
      },
      {
        name: "Basic Stationary Design",
      },
    ],
  },
  {
    name: "WEBSITE DESIGN",
    price: "$100.00",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ector invite reesizing ",
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    isOpen: "panel3",
    packages: [
      {
        name: "Logo Design",
      },
      {
        name: "Branding Guidelines",
      },
      {
        name: "Basic Stationary Design",
      },
    ],
  },
  {
    name: "WEBSITE DESIGN",
    price: "$100.00",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ector invite reesizing ",
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    isOpen: "panel4",
    packages: [
      {
        name: "Logo Design",
      },
      {
        name: "Branding Guidelines",
      },
      {
        name: "Basic Stationary Design",
      },
    ],
  },
];

const Packages = [
  {
    name: "Logo Design",
  },
  {
    name: "Branding Guidelines",
  },
  {
    name: "Basic Stationary Design",
  },
];

const AboutServicesDropdown = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [background, setBackground] = useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setBackground(isExpanded ? panel : "");
    };
  return (
    <DisplayCard backgroundColor={"#000000"} paddingTop="5%" paddingBottom="5%">
      {services.map((item) => (
        <Accordion
          style={{
            background: background == item.isOpen ? "#ffffff" : "#181717",
            marginBottom: "2.5%",
            borderRadius: "5px",
          }}
          expanded={expanded === item.isOpen}
          onChange={handleChange(item.isOpen)}
        >
          <AccordionSummary sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
            <AccordionSummaryStyle>
              <Typography
                className="name"
                sx={{
                  color:
                    background == item.isOpen
                      ? "#0A0A0A!important"
                      : "#EDEDED!important",
                }}
              >
                {item.name}
              </Typography>
              <Typography className="price">{item.price}</Typography>
            </AccordionSummaryStyle>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetailStyle>
              <div className="imgBox">
                <img src={item.img} />
              </div>
              <div className="detail">
                <div className="secondBox">
                  <Typography className="description">
                    {item.description}
                  </Typography>
                  <Link to={"/contact"} style={{ textDecoration: "none" }}>
                    <button>
                      <Typography className="start">START A PROJECT</Typography>
                      <div className="caret">
                        <CaretRight size={20} color="#000000" />
                      </div>
                    </button>
                  </Link>
                </div>

                <div className="thirdBox">
                  <Typography className="package">
                    This package includes:
                  </Typography>
                  <div className="rightSide">
                    {item.packages.map((x) => (
                      <div className="packageContainer">
                        <div className="check">
                          <Check size={18} color="#EDEDED" />
                        </div>
                        <Typography className="packageName">
                          {x.name}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionDetailStyle>
          </AccordionDetails>
        </Accordion>
      ))}
    </DisplayCard>
  );
};

export default AboutServicesDropdown;
