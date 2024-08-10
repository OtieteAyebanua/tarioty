import {
  AnimatedHeadingText,
  HeadingText,
  HeadingContainer,
  AnimatedBox,
} from "./style";

interface IHeading {
  letters: string[];
  nonAnimatedText: string;
  flexDirection?: "column" | "column-reverse";
  gap?: string;
  alignItems?: "center";
}

const Heading = ({
  letters,
  nonAnimatedText,
  flexDirection,
  gap,
  alignItems,
}: IHeading) => {
  return (
    <HeadingContainer
      style={{ flexDirection: flexDirection, gap: gap, alignItems: alignItems }}
    >
      <HeadingText>{nonAnimatedText}</HeadingText>
      <div className="box">
        {letters.map((item) => (
          <AnimatedBox>
            <AnimatedHeadingText id="mainText">{item}</AnimatedHeadingText>
            <AnimatedHeadingText id="shadowText">{item}</AnimatedHeadingText>
          </AnimatedBox>
        ))}
      </div>
    </HeadingContainer>
  );
};
export default Heading;
