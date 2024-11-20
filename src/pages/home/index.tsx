import { Typography } from "@mui/material";
import { DisplayCard } from "../../components/displayCard";
import Layout from "../../layout";
import { MainContainer } from "./style";
import { AppICons } from "../../assets/icons";

const Home = () => {
  return (
    <Layout>
      <DisplayCard backgroundImg="">
        <MainContainer>
          <Typography className="create-with-us">
            CREATE WITH US
            <br />
            Bringing Stories to 3D
          </Typography>
          <Typography className="below-create-with-us">
            Specializing in 3D animation, we craft engaging, high-quality
            animations, games, and <br /> cinematic experiences that elevate
            your brand.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2%",
            }}
          >
            <button className="get-started-under-create-with-us">
              Get Started
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "auto",
              marginTop: "2%",
            }}
          >
            <AppICons />
          </div>
        </MainContainer>
      </DisplayCard>
    </Layout>
  );
};
export default Home;
