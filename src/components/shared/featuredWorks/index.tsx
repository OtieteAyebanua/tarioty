import { Grid } from "@mui/material";
import { Dot } from "../../../assets/icons";
import { DisplayCard } from "../../displayCard";
import { FeaturedWorksBox, FeaturedWorksContainer } from "./style";
interface IFeaturedWorks {
  data: any;
}
const FeaturedWorks = ({ data }: IFeaturedWorks) => {
  return (
    <FeaturedWorksContainer>
      <Grid container className="grid">
        {data.map((item: any) => (
          <Grid item width={"50%"} id="grid">
            <FeaturedWorksBox>
              <div className="blurBox">
                <div id="blur"></div>
                <img src={item.img} id="img" alt="item" />
              </div>
              <div className="details">
                <p id="name">{item.name}</p>
                <Dot />
                <p>{item.type}</p>
                <Dot />
                <p>{item.year}</p>
              </div>
            </FeaturedWorksBox>
          </Grid>
        ))}
      </Grid>
    </FeaturedWorksContainer>
  );
};
export default FeaturedWorks;
