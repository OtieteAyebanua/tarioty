import Layout from "../../layout";
import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import LetsConnect from "../../components/shared/letsConnect";
import { FormContainer, LetsConnectContainer } from "./style";

const tapes = ["AVAILABLE FOR WORK", "SHOOT A MESSAGE", "AVAILABLE FOR WORK"];
const letters = ["T", "O", "U", "C", "H"];
const Contact = () => {
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <TickerTape tapes={tapes} />
        <Heading letters={letters} nonAnimatedText="GET IN " />
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <FormContainer>
          <div className="inputCenter">
            <input id="name" type="name" placeholder="NAME" />
            <input id="email" type="email" placeholder="EMAIL" />
          </div>
          <div className="inputCenter">
            <textarea id="message" placeholder="MESSAGE" />
          </div>
          <div className="inputCenter">
            <button>SEND MESSAGE</button>
          </div>
        </FormContainer>
      </DisplayCard>
      {/* <DisplayCard backgroundColor={"#0A0A0A"}>
          <DownloadResume />
        </DisplayCard> */}
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <LetsConnectContainer>
          <LetsConnect />
        </LetsConnectContainer>
      </DisplayCard>
    </Layout>
  );
};
export default Contact;
