import Heading from "../heading";
import { LetConnectContainer } from "./style";

const animatedText = ["C", "O", "N", "N", "E", "C", "T"];
const LetsConnect = () => {
  return (
    <LetConnectContainer>
      <p>GOT A PROJECT IN MIND?</p>
      <Heading nonAnimatedText="LET’S" letters={animatedText} />
    </LetConnectContainer>
  );
};
export default LetsConnect;
