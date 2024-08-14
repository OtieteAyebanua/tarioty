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
        {letters.map((word, wordIndex) =>
          word.split("").map((letter, letterIndex) => (
            <AnimatedBox>
              <AnimatedHeadingText id="mainText">{letter}</AnimatedHeadingText>
              <AnimatedHeadingText
                id="shadowText"
                key={`${wordIndex}-${letterIndex}`}
                style={
                  { "--i": wordIndex + letterIndex } as React.CSSProperties
                }
              >
                {letter}
              </AnimatedHeadingText>
            </AnimatedBox>
          ))
        )}
      </div>
    </HeadingContainer>
  );
};
export default Heading;
