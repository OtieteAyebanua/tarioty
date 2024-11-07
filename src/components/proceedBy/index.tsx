import { Typography } from "@mui/material";
import { DisplayCard } from "../displayCard";
import { FrontSide } from "three";
import { ProceedBtnsContainer } from "./style";
import { FileX } from "phosphor-react";

const Proceed = () => {
  return (
    <DisplayCard>
      <div
        style={{
          display: "flex",
          justifyContent:'space-evenly',
        }}
      >
        <Typography
          style={{
            color: "#ffffff",
            fontFamily: "manrope",
            fontSize: "16px",
            fontWeight: "500",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          Choose how you'd Like proceed
        </Typography>
        <ProceedBtnsContainer>
          <div></div>
          <div></div>
        </ProceedBtnsContainer>
      </div>
    </DisplayCard>
  );
};
export default Proceed;
