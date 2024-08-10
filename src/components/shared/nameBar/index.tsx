import { NameBarContainer } from "./style";

interface INameBar {
  textOne: string;
  textTwo: string;
  textOneColor: string;
  textTwoColor: string;
}

const NameBar = ({
  textOne,
  textOneColor,
  textTwo,
  textTwoColor,
}: INameBar) => {
  return (
    <NameBarContainer>
      <div className="topBar">
        <p id="myWord" style={{ color: textOneColor }}>
          {textOne} <div></div>{" "}
        </p>
        <p id="serviceWord" style={{ color: textTwoColor }}>
          {textTwo}
        </p>
      </div>
    </NameBarContainer>
  );
};
export default NameBar;
