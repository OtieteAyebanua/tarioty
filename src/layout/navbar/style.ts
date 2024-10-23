import styled from "@emotion/styled";
export const Navlist = styled.div`
  display: flex;
  width: 100%;
  gap: 28px;
  justify-content: center;
  #navName {
    font-size: 24px;
    font-family: Luckiest Guy;
    color: #ffffff;
    text-decoration: none;
    transition: 0.5s;
    text-decoration: none;
    animation: float 4s ease-in-out infinite;
  }
  #navName:hover {
    color: #f9bf37;
  }
  @keyframes float {
    0% {
      transform: translateY(0); /* Starting position */
    }
    50% {
      transform: translateY(-15px); /* Float upwards */
    }
    100% {
      transform: translateY(0); /* Back to start */
    }
  }

  .imgNav {
    height: 25px;
    overflow: hidden;
  }
  #navImg {
    transition: 1s;
    position: relative;
    bottom: 0%;
  }
`;

export const IsMenu = styled.div`
  width: 99%;
  margin: auto;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: #0a0a0a;
  z-index: 5;
  padding-top: 10px;
  .mobileLink {
    color: #ffffff;
    font-family: outfit;
    padding-bottom: 5px;
    padding-left: 10px;
  }
  .close {
    position: relative;
    right: 11%;
    left: 89%;
    margin-top: 10px;
  }
  .link {
    text-decoration: none;
    position: relative;
    z-index: 10;
  }
`;
export const GridLinesStyle = styled.div`
  border: solid red;
  position: absolute;
  top: -100px;
  left: -30px;
`;
