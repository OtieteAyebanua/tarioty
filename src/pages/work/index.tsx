import { DisplayCard } from "../../components/displayCard";
import FeaturedWorks from "../../components/shared/featuredWorks";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
import Lion from "../../assets/px.jpg";
import NameBar from "../../components/shared/nameBar";
import LetsConnect from "../../components/shared/letsConnect";
const tapes = [
  "ANIMATIONS",
  "3D DESIGN",
  "AUGMENTED REALITY",
  "VIRTUAL REALITY",
  "2D DESIGN",
];
const letters = ["W", "O", "R", "K", "S"];
const featuredWorks = [
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
];
const Work = () => {
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <TickerTape tapes={tapes} />
        <Heading
          nonAnimatedText="SELECTED"
          letters={letters}
          flexDirection="column"
          gap="0"
          alignItems="center"
        />
        <NameBar
          textOne="FEATURED"
          textTwo="WORKS"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <FeaturedWorks data={featuredWorks} />
        <LetsConnect/>
      </DisplayCard>
    </Layout>
  );
};
export default Work;
