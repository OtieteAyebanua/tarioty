import { DisplayCard } from "../../components/displayCard";
import Layout from "../../layout";
import { CreateWithUsContainer } from "./style";
import N1 from "../../assets/v1.jpg";
import { Typography } from "@mui/material";
import ShowCase from "../../components/showcase";
import Proceed from "../../components/proceedBy";

const services = [
  {
    title: "Short Film",
    quote: "Perfect for quick narratives that captivate ",
    img: N1,
  },

  {
    title: "Short Film",
    quote: "Perfect for quick narratives that captivate ",
    img: N1,
  },
  {
    title: "Short Film",
    quote: "Perfect for quick narratives that captivate ",
    img: N1,
  },
  {
    title: "Short Film",
    quote: "Perfect for quick narratives that captivate ",
    img: N1,
  },
];
const CreateWithUs = () => {
  return (
    <Layout>
      <DisplayCard backgroundImg={N1} height="clamp(300px,55vw,3000px)">
        <CreateWithUsContainer>
          <div className="header">
            <Typography
              style={{
                fontFamily: "inter",
                fontWeight: "600",
                color: "#ffffff",
                fontSize: "28px",
                letterSpacing: "2px",
              }}
            >
              Create With Us
            </Typography>
          </div>
        </CreateWithUsContainer>
      </DisplayCard>
      <DisplayCard backgroundColor="#0A0A0A">
        <Typography
          style={{
            fontFamily: "manrope",
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "16px",
            letterSpacing: "2px",
            paddingTop: "5%",
            paddingBottom: "1.5%",
          }}
        >
          What would you like to do?
        </Typography>
        <Typography
          style={{
            fontFamily: "manrope",
            fontWeight: "600",
            color: "#ffffff",
            fontSize: "28px",
            letterSpacing: "2px",
            paddingBottom: "1.5%",
          }}
        >
          Let’s bring your vision to life with our animation expertise
        </Typography>
      </DisplayCard>
      {services.map((item) => (
        <ShowCase title={item.title} quote={item.quote} img={item.img} />
      ))}
    </Layout>
  );
};
export default CreateWithUs;
