import { useState } from "react";
import { DisplayCard } from "../../components/displayCard";
import Layout from "../../layout";
import Heading from "../../components/shared/heading";
import Hero from "../../assets/hero.png";
import Ex from "../../assets/Ex.png";
import {
  HBContainer,
  HeroImgContainer,
  UnderImgHero,
  AccomplishmentContainer,
  ExperienceContainer,
} from "./style";
import NameBar from "../../components/shared/nameBar";
import MyServiceTabs from "../../components/shared/myServices";
import LetsConnect from "../../components/shared/letsConnect";
import { Collapse, Button } from "@mui/material";
const letters = ["M", "E"];
const accomplishment = [
  {
    id: "1",
    number: "60",
    sign: "+",
    text: "PROJECTS DONE",
  },
  {
    id: "2",
    number: "25",
    sign: "",
    text: "TESTIMONIALS",
  },
  {
    id: "3",
    number: "5",
    sign: "+",
    text: "YEARS OF EXPERIENCE",
  },
  {
    id: "4",
    number: "00",
    sign: "",
    text: "UNHAPPY CLIENTS",
  },
];
const services = [
  "2D/3D DESIGN",
  "WEBSITE DESIGN",
  "ANIMATIONS",
  "AR/VR TECHNOLOGY",
];
const experience = [
  {
    id: "1",
    company: "APPLE",
    title: "PRODUCT DESIGNER ",
    year: "2022 - PRESENT",
    description:
      "Jobfactor is a job hosting platform that employs a blend of tools and AI to modernize and enhance the conventional hiring process, providing substantial advantages to both employers and job seekers. At Jobfactor Inc., our mission is to narrow the divide between talent and opportunities. At Jobfactor I;",
    link: "",
  },
  {
    id: "2",
    company: "FACEBOOK",
    title: "UI/UX DESIGNER",
    year: "2022 - 2024",
    description:
      "Jobfactor is a job hosting platform that employs a blend of tools and AI to modernize and enhance the conventional hiring process, providing substantial advantages to both employers and job seekers. At Jobfactor Inc., our mission is to narrow the divide between talent and opportunities. At Jobfactor I;",
    link: "",
  },
  {
    id: "3",
    company: "AMAZON",
    title: "ANIMATOR",
    year: "2022 - 2024",
    description:
      "Jobfactor is a job hosting platform that employs a blend of tools and AI to modernize and enhance the conventional hiring process, providing substantial advantages to both employers and job seekers. At Jobfactor Inc., our mission is to narrow the divide between talent and opportunities. At Jobfactor I;",
    link: "",
  },
  {
    id: "4",
    company: "MICROSOFT",
    title: "VIDEO EDITOR",
    year: "2022 - 2024",
    description:
      "Jobfactor is a job hosting platform that employs a blend of tools and AI to modernize and enhance the conventional hiring process, providing substantial advantages to both employers and job seekers. At Jobfactor Inc., our mission is to narrow the divide between talent and opportunities. At Jobfactor I;",
    link: "",
  },
];
const list = [
  {
    list1:
      "Pioneered the design of the Landing page and the web app, a job board platform where professionals and companies meet. The web app was designed placing the users (Companies and Professionals) at the core of the process.",
    list2:
      "Devised and executed strategies that enhanced companies' hiring processes by 45%, concurrently ensuring optimal matches between skilled professionals and job opportunities. This initiative led to a notable 30% increase in the employment rate of professionals.",
    list3:
      "Worked closely with cross-functional teams to ensure seamless integration of new features and enhancements, while also ensuring adherence to best practices and industry standards.",
    list4:
      "Monitored and analysed key metrics to optimise performance and improve user experience.",
    list5:
      "Stayed up-to-date with the latest technological advancements and identified opportunities for innovation to maintain a competitive edge in the market.",
  },
];

const About = () => {
  const [open, setOpen] = useState(-1);
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <Heading letters={letters} nonAnimatedText="ABOUT" />
        <HBContainer>
          <HeroImgContainer>
            <img src={Hero} alt="hero" />
          </HeroImgContainer>
        </HBContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <UnderImgHero>
          <p id="word">
            Figma ipsum component variant main layer. Star undo create figjam
            bold mask. Library connection asset font asset effect create. ector
            invite reesizing strikethrough edit style flows comment group
            thumbnail. Connection flows image star pixel mask union. group
            thumbnail. Connection flows image star pixel mask union.
          </p>
        </UnderImgHero>
        <AccomplishmentContainer>
          {accomplishment.map((item) => (
            <div>
              <div className="accomplishmentCard">
                <div className="numberSign">
                  <div className="number">{item.number}</div>
                  <div className="sign">{item.sign}</div>
                </div>
                <div className="text">{item.text}</div>
              </div>
            </div>
          ))}
        </AccomplishmentContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#212121"}>
        <NameBar
          textOne="MY"
          textTwo="SERVICES"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <MyServiceTabs services={services} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#212121"}>
        <NameBar
          textOne="MY"
          textTwo="EXPERIENCE"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <ExperienceContainer>
          {experience.map((item, index) => (
            <div>
              <div
                className="experienceCard"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <div className="experienceCardHead">
                  <div className="experienceCompany">{item.company}</div>
                  <div className="experienceTitle">{item.title}</div>
                  <div className="experienceYear">{item.year}</div>
                </div>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  <div className="experienceCardUnder">
                    <img src={Ex} alt="ImG" />
                    <p className="word">{item.description}</p>
                    {list.map((item) => (
                      <ul>
                        <li>{item.list1}</li>
                        <li>{item.list2}</li>
                        <li>{item.list3}</li>
                        <li>{item.list4}</li>
                        <li>{item.list5}</li>
                      </ul>
                    ))}
                    <Button variant="contained">VISIT PROJECT</Button>
                  </div>
                </Collapse>
              </div>
            </div>
          ))}
        </ExperienceContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <LetsConnect />
      </DisplayCard>
    </Layout>
  );
};
export default About;
