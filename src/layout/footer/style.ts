import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3%;
  @media (max-width: 899px) {
    flex-direction: column;
    justify-content: center;
  }
    #img{
    padding-right: 4%;
    @media(max-width: 899px){
    padding-right: 0;}
    }
  .social {
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
        display: block;
      }
    }
  }
`;
