import { Dot } from "../../../assets/icons";
import { Tapes, TickerTapeContainer } from "./style";
interface ITickerTape {
  tapes: string[];
}

const TickerTape = ({ tapes }: ITickerTape) => {
  return (
    <TickerTapeContainer>
      <Tapes>
        {tapes.map((item) => (
          <p>
            {item} <Dot />
          </p>
        ))}
      </Tapes>
    </TickerTapeContainer>
  );
};
export default TickerTape;
