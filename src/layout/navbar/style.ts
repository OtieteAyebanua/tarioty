import styled from "@emotion/styled";
export const Navlist = styled.div`
  display: flex;
  width: 100%;
  gap: 3%;
  justify-content: center;
  #navName {
    font-size: clamp(10px, 1.3vw, 70px);
    font-famil: inter;
    color: #ffffff;
    text-decoration: none;
    transition: 0.5s;
    text-decoration: none;
  }
  #navName:hover {
    color: #f9bf37;
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
    font-family: inter;
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
