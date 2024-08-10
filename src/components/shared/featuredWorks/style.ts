import styled from "styled-components";

export const FeaturedWorksContainer = styled.div`
  padding-bottom: 7%;
  .grid {
    #grid {
      @media (max-width: 450px) {
        width: 100%;
      }
    }
  }
`;

export const FeaturedWorksBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  .details {
    display: flex;
  }

  .blurBox {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 95%;
    #blur {
      position: absolute;
      z-index: 2;
      filter: blur(3px);
      transition: 1s;
      background: white;
      opacity: 0.3;
      transform-origin: top right;
      width: clamp(200px, 45vw, 644px);
      aspect-ratio: 10/8;
      @media (max-width: 450px) {
        width: 100%;
      }
    }
    &:hover {
      #blur {
        transform: scale(0.3);
        right: 0%;
      }
      #img {
        transform: scale(1.2);
        filter: blur(0px);
      }
    }
  }

  #img {
    width: clamp(200px, 45vw, 644px);
    aspect-ratio: 10/8;
    border-radius: 5px;
    transition: 0.5s;
    filter: blur(3px);
    @media (max-width: 450px) {
      width: 100%;
    }
  }
  .details {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 90%;
    p {
      font-size: 20px;
      font-weight: 400;
      font-family: Outfit;
      color: #a9a9a9;
      @media (max-width: 899px) {
        font-size: clamp(10px, 2.4vw, 20px);
        white-space: nowrap;
      }
      @media (max-width: 450px) {
        font-size: clamp(10px, 4vw, 20px);
      }
    }
    #name {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #f7f7f7;
      font-family: Outfit;
    }
  }
`;
