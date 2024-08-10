import styled from "styled-components";

export const HowIWorkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  .summary {
    .num {
      font-size: 16px;
      font-family: outfit;
      font-weight: 400;
      color: #0f0f0f;
    }
    .name {
      font-size: clamp(20px,3vw, 48px);
      font-family: outfit;
      font-weight: 700;
      color: #000000;
    }
  }
  .detail {
    .description {
      font-size: clamp(5px,4.5vw,20px);
      font-family: outfit;
      font-weight: 400;
      color: #0f0f0fcc;
    }
  }
  .container2 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    #fDiv {
      display: flex;
      gap: 10px;
    }
    #div {
      transition: 1s;
    }
  }
`;
export const ThreeJSContainer = styled.div`
  width: 100%;
`;
