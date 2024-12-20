import styled from "@emotion/styled";

export const HeadingContainer = styled.div`
  overflow: hidden;
  display: flex;
  margin: auto;
  justify-content: center;
  gap: clamp(10px, 5vw, 70px);
  position: absolute;
  left: 0;
  right: 0px;
  padding-top: 100px;
  width: 100%;
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
  font-size: clamp(50px, 9vw, 150px);
  font-weight: 400;
  line-height: 180px;
  color: #f7f7f7;
  font-family: Luckiest Guy;
  transition: 0.5s;
  @media (max-width: 899px) {
    font-size: clamp(30px, 19vw, 90px);
    text-align: center;
    line-height: 100px;
  }
`;
export const AnimatedHeadingText = styled.text`
  font-size: clamp(50px, 6vw, 100px);
  font-weight: 400;
  line-height: 180px;
  color: #ffffff;
  font-family: Luckiest Guy;
  letter-spacing: 5px;
  position: relative;
  z-index: 2;
  width: 100%;
  cursor: pointer;
  @media (max-width: 899px) {
    font-size: clamp(30px, 19vw, 90px);
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
  @media (max-width: 768px) {
    #mainText {
      display: none;
    }
    #shadowText {
      display: inline-block;
      animation: wave 1s ease-in-out infinite;
      animation-delay: calc(0.1s * var(--i));
    }
    @keyframes wave {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }
`;
