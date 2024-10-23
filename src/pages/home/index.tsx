import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
import Bg from "../../assets/wallpaperflare.com_wallpaper.jpg";
import { TestimonialContainer } from "./style";
import MyServiceTabs from "../../components/shared/myServices";
import FeaturedWorks from "../../components/shared/featuredWorks";
import NameBar from "../../components/shared/nameBar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LeftCricledArrow, RightCircledArrow } from "../../assets/icons";
import DownloadResume from "../../components/shared/downloadResume";
import LetsConnect from "../../components/shared/letsConnect";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import AboutServicesDropdown from "../../components/aboutServicesDropdown";
import { HowIWorkContainer, ThreeJSContainer } from "./style";
import vid1 from "../../assets/vid.mp4";
import vid2 from "../../assets/vid2.mp4"

const tapes = [
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
];

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

const letters = ["T", "A", "R", "I", "O", "T", "Y"];
const featuredWorks = [
  {
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: "https://media4.giphy.com/media/ixvKqzJFAg2DC/200.webp?cid=790b7611wu273jre38hg6caymovcgksxku3udgzjkipigtve&ep=v1_gifs_search&rid=200.webp&ct=g",
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
];
const testimonial = [
  {
    message:
      "“ Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. Vector invite reesizing strikethrough edit style flows comment group thumbnail. Connection flows image star pixel mask union. “",
    authorImg: null,
    authorName: "Shari Kiehn-Konopelski",
    jobTitle: "International Solutions Administrator",
  },
];
const Home = () => {
  const model = useGLTF(process.env.PUBLIC_URL + "/bulb.glb");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [border, setBorder] = useState("");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setBorder(isExpanded ? panel : "");
    };
  return (
    <Layout>
      <DisplayCard isVideo position="relative" autoplay marginBottom="-3.5px" videoSrc={vid1}>
        <Heading letters={letters} nonAnimatedText="ANIMATION" />
      </DisplayCard>
      <DisplayCard isVideo position="relative"  videoSrc={vid2}></DisplayCard>
      <DisplayCard backgroundColor="#000000">
        <AboutServicesDropdown />
      </DisplayCard>
      <DisplayCard backgroundColor={"#000000"}>
        <NameBar
          textOne="HOW"
          textTwo="WORK"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <HowIWorkContainer>
          <ThreeJSContainer>
            <Canvas>
              <spotLight
                position={[0, -2, 0]}
                intensity={200}
                castShadow
                color={"yellow"}
              />
              <spotLight
                position={[4, 0, 0]}
                intensity={100}
                castShadow
                color={"yellow"}
              />
              <spotLight
                position={[0, -2, 0]}
                intensity={200}
                castShadow
                color={"yellow"}
              />
              <ambientLight intensity={10} />
              <Suspense fallback={<div>Loading...</div>}>
                <mesh scale={50} position={[0, -2, 0]}>
                  <primitive object={model.scene} />
                </mesh>
              </Suspense>
              <OrbitControls />
            </Canvas>
          </ThreeJSContainer>
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
                  sx={{ borderRadius: "16px" }}
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
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <NameBar
          textOne="CLIENTS"
          textTwo="TESTIMONIAL"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <TestimonialContainer>
          {testimonial.map((item) => (
            <div>
              <p id="message">{item.message}</p>
              <div className="bottomBox">
                <div className="detailsContainer">
                  <Avatar id="avatar" />
                  <div className="details">
                    <div id="authorName">{item.authorName}</div>
                    <div id="jobTitle">{item.jobTitle}</div>
                    <Link to="">
                      <div id="linkedin">Linkedin</div>
                    </Link>
                  </div>
                </div>
                <div className="toAndFro"></div>
              </div>
            </div>
          ))}
        </TestimonialContainer>
      </DisplayCard>
      {/* <DisplayCard backgroundColor={"#0A0A0A"}>
        <DownloadResume />
      </DisplayCard> */}
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <LetsConnect />
      </DisplayCard>
    </Layout>
  );
};
export default Home;

const RotatingCube = ({ position, color }: any) => {
  const meshRef = useRef<any>();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation.x;
      meshRef.current.rotation.y = rotation.y;
    }
  });

  const handleClick = () => {
    // Increment the rotation by 90 degrees (π/2 radians) on each axis
    setRotation((prevRotation) => ({
      x: prevRotation.x + Math.PI / 2,
      y: prevRotation.y + Math.PI / 2,
    }));
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
      scale={hovered ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const FloatingObject = () => {
  const { scene } = useGLTF(process.env.PUBLIC_URL + "/gameboy.glb");
  const meshRef = useRef<any>();
  let floatingSpeed = 0.8; // Speed of the floating animation
  let amplitude = 0.5; // Amplitude of the floating animation

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time * floatingSpeed) * amplitude;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <mesh scale={0.23} position={[0, -2, 0]}>
        <primitive object={scene} />;
      </mesh>
    </mesh>
  );
};
