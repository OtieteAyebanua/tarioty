import { Link } from "react-router-dom";
import Heading from "../heading";
import { LetConnectContainer } from "./style";

const animatedText = ["C", "O", "N", "N", "E", "C", "T"];
const LetsConnect = () => {
  return (
    <LetConnectContainer>
      <Link to={"/contact"} style={{textDecoration:'none'}}>
        <p>TAP TO CONNECT</p>
      </Link>
      <Heading nonAnimatedText="LET’S" letters={animatedText} />
    </LetConnectContainer>
  );
};
export default LetsConnect;
