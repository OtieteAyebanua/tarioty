import styled from "@emotion/styled";

export const HeadingContainer = styled.div`
  overflow: hidden;
  display: flex;
  margin: auto;
  justify-content: center;
  gap: clamp(10px, 5vw, 70px);
  .box {
    display: flex;
    height: 170px;
    @media (max-width: 899px) {
      justify-content: center;
    }
  }
  @media (max-width: 899px) {
    flex-direction: column;
    height: auto;
    gap: 0px !important;
  }
`;
export const HeadingText = styled.text`
  font-size: clamp(50px, 12vw, 150px);
  font-weight: 400;
  line-height: 180px;
  color: #f7f7f7;
  font-family: Fjalla One;
  transition: 0.5s;
  @media (max-width: 899px) {
    font-size: clamp(30px, 26vw, 90px);
    text-align: center;
    line-height: 100px;
  }
`;
export const AnimatedHeadingText = styled.text`
  font-size: clamp(50px, 12vw, 150px);
  font-weight: 400;
  line-height: 180px;
  color: #454545;
  font-family: Fjalla One;
  position: relative;
  z-index: 2;
  cursor: pointer;
  @media (max-width: 899px) {
    font-size: clamp(30px, 26vw, 90px);
    line-height: 130px;
  }
`;

export const AnimatedBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  #mainText {
    position: relative;
    transition: 0.4s;
    bottom: 0%;
  }
  #shadowText {
    position: relative;
    transition: 0.4s;
    bottom: 0%;
    color: #f9bf37;
  }
  &:hover {
    #mainText {
      bottom: 100%;
    }
    #shadowText {
      bottom: 108%;
    }
  }
  @media (max-width: 899px) {
    height: 149px;
  }
`;
