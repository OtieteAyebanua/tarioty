import styled from "@emotion/styled";

export const MainContainer = styled.div`
  position: relative;
  top: clamp(100px, 10vw, 600px);
  width: 99%;
  margin: auto;
  .create-with-us {
    font-family: inter;
    font-weight: 700;
    color: #ffffff;
    font-size: clamp(72px, 4vw, 300px);
    width: 100%;
    text-align: center;
    line-height: 120%;
    @media (max-width: 850px) {
      font-size: clamp(20px, 4vw, 70px);
    }
  }
  .below-create-with-us {
    font-weight: 400;
    font-family: inter;
    text-align: center;
    color: #ffffff;
    font-size: clamp(18px, 1vw, 70px);
    padding-top: 2.5%;
    width: 90%;
    margin: auto;
    @media (max-width: 850px) {
      font-size: clamp(5px, 2.1vw, 40px);
    }
  }
  .get-started-under-create-with-us {
    position: relative;
    background: #fbda2e;
    border-radius: 100px;
    cursor: pointer;
    border: none;
    font-family: "Inter";
    font-weight: 700;
    font-size: clamp(14px, 1vw, 60px);
    color: #000000;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 2%;
    padding-right: 2%;
    @media (max-width: 850px) {
      font-size: clamp(10px, 2vw, 50px);
      padding-top: 1.5%;
      padding-bottom: 1.5%;
      margin-top: 2%;
    }
  }
`;
