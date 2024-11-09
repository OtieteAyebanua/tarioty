import { DisplayCard } from "../../components/displayCard";
import Layout from "../../layout";
import N1 from "../../assets/v1.jpg";
import { Typography } from "@mui/material";
import { Header } from "./style";
const Projects = () => {
  return (
    <Layout>
      <DisplayCard backgroundImg={N1} height="clamp(300px,55vw,3000px)">
        <Header>
          <Typography
            style={{
              fontFamily: "inter",
              fontWeight: "600",
              color: "#ffffff",
              fontSize: "28px",
              letterSpacing: "2px",
            }}
          >
           Bringing Your Dreams to the Reality
          </Typography>
        </Header>
      </DisplayCard>
    </Layout>
  );
};
export default Projects;
