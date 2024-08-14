import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  #burgerMenu {
    display: none;
    @media (max-width: 899px) {
      display: block;
    }
  }
  @media (max-width: 899px) {
    justify-content: space-between;
    padding: 10px;
    #img {
      width: 100%;
    }
  }
`;
export const Navlist = styled.div`
  display: flex;
  gap: 28px;
  .navNames {
    height: 22px;
    overflow: hidden;
  }
  .navNames:hover {
    #navName {
      top: -160%;
    }
    #navNameShadow {
      bottom: 220%;
    }
    #line {
      width: 15px;
      visibility: visible;
    }
  }
  #navName {
    font-size: 14px;
    font-family: Outfit;
    line-height: 16px;
    color: #bababa;
    text-decoration: none;
    transition: 1s;
    transform: translateY(5px);
    position: relative;
    top: -55%;
  }
  #navNameShadow {
    color: #70666c;
    transition: 1s;
    position: relative;
    bottom: 100%;
  }
  #line {
    border: solid #bf922d 1px;
    position: relative;
    bottom: 120%;
    width: -0px;
    visibility: hidden;
    transition: 1s;
    transition-delay: 0.5s;
  }
  #navShadowlink {
    text-decoration: none;
    @media (max-width: 899px) {
      display: none;
    }
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
