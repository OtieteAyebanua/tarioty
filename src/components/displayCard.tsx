import { Box, Container } from "@mui/material";
interface IDisplayCard {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundImg?: string;
  position?: "absolute" | "relative" | "static" | "fixed";
  border?: string;
  padding?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingBottom?: string;
  marginBottom?: string;
  bottom?: string;
  margin?: string;
  height?: string;
  top?: string;
  isVideo?: boolean;
  autoplay?: boolean;
  videoSrc?: string;
}
export const DisplayCard = ({
  children,
  backgroundColor,
  backgroundImg,
  position,
  border,
  padding,
  paddingTop,
  paddingLeft,
  paddingBottom,
  marginBottom,
  bottom,
  margin,
  height,
  top,
  isVideo,
  autoplay,
  videoSrc,
}: IDisplayCard) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImg})` as string,
        backgroundSize: "cover",
        position: position,
        border: border,
        padding: padding,
        paddingTop: paddingTop,
        paddingLeft: paddingLeft,
        paddingBottom: paddingBottom,
        marginBottom: marginBottom,
        bottom: bottom,
        margin: margin,
        height: height,
        top: top,
      }}
    >
      <Container maxWidth="xl"> {children}</Container>
      {isVideo ? (
        <video
          muted
          loop
          autoPlay={autoplay}
          style={{
            width: "100%",
            position: "relative",
            zIndex: "-1",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};
