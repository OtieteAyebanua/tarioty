import { Box, Container } from "@mui/material";

interface IDisplayCard {
  children: React.ReactNode;
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
        overflowX: "hidden",
        bottom: bottom,
        margin: margin,
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};
