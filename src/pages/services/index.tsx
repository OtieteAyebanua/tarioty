import Layout from "../../layout";
import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import NameBar from "../../components/shared/nameBar";
import AboutServicesDropdown from "../../components/aboutServicesDropdown";
import LetsConnect from "../../components/shared/letsConnect";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { HowIWorkContainer, ThreeJSContainer } from "./style";
import React, { useState } from "react";
const tapes = ["WHAT I OFFER", "MY SERVICES", "WHAT I OFFER", "MY SERVICES"];
const letters = ["S", "E", "R", "V", "I", "C", "E"];

const howIWork = [
  {
    num: "01",
    title: "Consultation",
    isOpen: "panel1",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ",
  },
  {
    num: "01",
    title: "Consultation",
    isOpen: "panel2",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ",
  },
  {
    num: "01",
    title: "Consultation",
    isOpen: "panel3",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ",
  },
  {
    num: "01",
    title: "Consultation",
    isOpen: "panel4",
    description:
      "Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ",
  },
];

const Services = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [border, setBorder] = useState("");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setBorder(isExpanded ? panel : "");
    };
  return (
    <Layout>
      <DisplayCard
        backgroundColor={"#0A0A0A"}
        paddingBottom="5%"
        paddingTop="5%"
      >
        <TickerTape tapes={tapes} />
        <Heading letters={letters} nonAnimatedText="MY" />
      </DisplayCard>
      <AboutServicesDropdown />
      <DisplayCard backgroundColor={"#000000"}>
        <NameBar
          textOne="HOW"
          textTwo="WORK"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <HowIWorkContainer>
          <ThreeJSContainer></ThreeJSContainer>
          <div className="container2">
            {howIWork.map((item) => (
              <div id="fDiv">
                <div
                  id="div"
                  style={{
                    border:
                      item.isOpen == border ? "solid  1px #ffffff" : "none",
                  }}
                ></div>
                <Accordion
                  sx={{ borderRadius: "16px"}}
                  expanded={expanded === item.isOpen}
                  onChange={handleChange(item.isOpen)}
                >
                  <AccordionSummary className="summary">
                    <div>
                      <Typography className="num">01</Typography>
                      <Typography className="name">Consultation</Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className="detail">
                    <Typography className="description">
                      Figma ipsum component variant main layer. Star undo create
                      figjam bold mask. Library connection asset font asset
                      effect create.
                    </Typography>
                  </AccordionDetails>
                </Accordion>{" "}
              </div>
            ))}
          </div>
        </HowIWorkContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#000000"}>
        <LetsConnect />
      </DisplayCard>
    </Layout>
  );
};
export default Services;
