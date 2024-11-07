import { Typography } from "@mui/material";
import { DisplayCard } from "../displayCard";
import { ShowCaseContainer } from "./style";

interface IShowCase {
  title: string;
  quote: string;
  img: string;
}

const ShowCase = ({ title, quote, img }: IShowCase) => {
  return (
    <ShowCaseContainer style={{ backgroundImage: `Url(${img})` }}>
      <div className="innerbox">
        <div
          style={{
            margin: "auto",
            position:'relative',
            top: '25%',
            paddingLeft:'3%'
          }}
        >
          <Typography
            style={{
              fontFamily: "manrope",
              fontWeight: "550",
              color: "#ffffff",
              fontSize: "24px",
              letterSpacing: "2px",
              paddingBottom: "30px",
            }}
          >
            {title}
          </Typography>
          <div
            style={{
              border: "solid #ffffff 3.5px",
              width: "110px",
            }}
          ></div>
          <Typography
            style={{
              fontFamily: "manrope",
              fontWeight: "400",
              color: "#ffffff",
              fontSize: "20px",
              letterSpacing: "2px",
              paddingTop: "15px",
            }}
          >
            {quote}
          </Typography>
        </div>
          <div className="hoverme"></div>
      </div>
    </ShowCaseContainer>
  );
};
export default ShowCase;
