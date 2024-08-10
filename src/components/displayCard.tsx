import { Box, Container } from "@mui/material";

interface IDisplayCard {
  children: React.ReactNode;
  backgroundColor?: string | null;
  backgroundImg?: any;
  position?: "absolute" | "relative" | "static" | "fixed";
  border?: string;
  padding?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingBottom?: string;
  marginBottom?: string;
  bottom?: string;
  margin? : string;
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
    <Box
      sx={{
        width: "100%",
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        position: position,
        border: border,
        p: padding,
        pt: paddingTop,
        pl: paddingLeft,
        pb: paddingBottom,
        mb: marginBottom,
        overflowX: "hidden",
        bottom: bottom,
        margin: margin,
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
