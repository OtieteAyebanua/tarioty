import styled from "@emotion/styled";

export const TickerTapeContainer = styled.div`
  width: 25%;
  margin: auto;
  overflow: hidden;
  background: transparent;
  @media (max-width: 899px) {
    width: clamp(57%, 4vw, 57%);
    @media (max-width: 768px) {
      width: 57%;
    }
      @media (max-width: 425px) {
      width: 100%;
    }
  }
`;
export const Tapes = styled.div`
  font-size: 16px;
  color: #878787;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  font-family: Outfit;
  animation: taperAnimation 6s infinite alternate ease-in-out;
  p {
    display: flex;
    font-family: Outfit;
    align-items: center;
    gap: 20px;
    white-space: nowrap;
  }

  @keyframes taperAnimation {
    0% {
      transform: translateX(0.5%);
    }
    100% {
      transform: translateX(-44%);
    }
  }
`;
