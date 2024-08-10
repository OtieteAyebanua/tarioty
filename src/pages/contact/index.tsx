import Layout from "../../layout";
import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import LetsConnect from "../../components/shared/letsConnect";
import { FormContainer, LetsConnectContainer } from "./style";
import { 
  TextField,
  Button
} from "@mui/material";
import DownloadResume from "../../components/shared/downloadResume";
const tapes = [
  "AVAILABLE FOR WORK",
  "SHOOT A MESSAGE",
  "AVAILABLE FOR WORK",
];
const letters = ["T", "O", "U", "C", "H"];
const Contact = () => {
    return (
      <Layout>
        <DisplayCard backgroundColor={"#0A0A0A"} 
        paddingTop="2%">
          <TickerTape
            tapes={tapes}
          />
          <Heading
            letters={letters} nonAnimatedText="GET IN "

          />
        </DisplayCard>
        <DisplayCard backgroundColor={"#0A0A0A"}>
          <FormContainer>
            <div className="inputCenter">
              <TextField 
                id="name"
                label="NAME" 
                type="name" 
                variant="outlined" 
              />
              <TextField 
                id="email" 
                label="EMAIL" 
                type="email" 
                variant="outlined" 
              /> 
            </div>
            <div className="inputCenter">
              <TextField
                id="message"
                label="MESSAGE"
                type="text"
                rows={8}
                multiline
              />
              
            </div>
            <div className="inputCenter">
              <Button 
                variant="contained">
                SEND MESSAGE
              </Button>
            </div>
          </FormContainer>
        </DisplayCard>
        {/* <DisplayCard backgroundColor={"#0A0A0A"}>
          <DownloadResume />
        </DisplayCard> */}
        <DisplayCard backgroundColor={"#0A0A0A"}>
          <LetsConnectContainer>
            <LetsConnect/>
          </LetsConnectContainer>
        </DisplayCard>
      </Layout>
    );
  };
  export default Contact;
  