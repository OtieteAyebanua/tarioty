import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
import Bg from "../../assets/tariBg.jpg";
import { TestimonialContainer } from "./style";
import MyServiceTabs from "../../components/shared/myServices";
import FeaturedWorks from "../../components/shared/featuredWorks";
import NameBar from "../../components/shared/nameBar";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { LeftCricledArrow, RightCircledArrow } from "../../assets/icons";
import DownloadResume from "../../components/shared/downloadResume";
import LetsConnect from "../../components/shared/letsConnect";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const tapes = [
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
  "PLACE YOUR ADVERT HERE",
];

const letters = ["C", "O", "N", "S", "U", "L", "T", "A", "N", "T"];
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
  return (
    <Layout>
      <DisplayCard backgroundImg={Bg} paddingTop="2%">
        <TickerTape tapes={tapes} />
        <Heading letters={letters} nonAnimatedText="ANIMATION" />
        <Canvas style={{ height: "500px", width: "100%", margin: "auto" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableDamping={true} enableZoom={false} />
          <RotatingCube position={[-2, 0, 0]} color="red" />
          <RotatingCube position={[2, 0, 0]} color="blue" />
          <FloatingObject/>
        </Canvas>
      </DisplayCard>
      <DisplayCard backgroundColor={"#212121"}>
        <NameBar
          textOne="FEATURED"
          textTwo="WORKS"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <FeaturedWorks data={featuredWorks} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#EDEDED"}>
        <NameBar
          textOne="CLIENTS"
          textTwo="TESTIMONIAL"
          textOneColor="#191718"
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
                <div className="toAndFro">
                  <LeftCricledArrow /> <RightCircledArrow />
                </div>
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
