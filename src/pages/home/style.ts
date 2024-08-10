import styled from "styled-components";

export const HeroImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;
  img {
    position: absolute;
    bottom: 0%;
    width: clamp(300px, 50vw, 400px);
    @media (max-width: 899px) {
      position: static;
      width: clamp(100px, 80vw, 400px);
    }
  }
`;

export const BesideHeroImg = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Outfit;
  color: #bababa;
  width: 33%;
  position: absolute;
  right: -4%;
  @media (min-width: 900px) {
    right: -10%;
  }
  @media (min-width: 1341px) {
    right: 0%;
  }
  bottom: 5%;
  @media (max-width: 899px) {
    position: relative;
    width: 50%;
    right: 0%;
    margin: auto;
    text-align: center;
  }
  #word1 {
    font-size: clamp(10px, 2vw, 28px);
    font-weight: 500;
  }
  #word2 {
    font-size: clamp(10px, 1.5vw, 20px);
    font-weight: 400;
  }
`;
export const HBContainer = styled.div`
  position: relative;
  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TestimonialContainer = styled.div`
  div {
    #message {
      font-family: Outfit;
      font-size: clamp(10px, 5.7vw, 48px);
      font-weight: 600;
      line-height: clamp(20px, 10vw, 57px);
      color: #0f0f0f;
    }
  }
  .bottomBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 899px) {
      align-items: normal;
      flex-direction: column;
      .toAndFro {
        justify-content: flex-end;
      }
    }
  }
  .detailsContainer {
    display: flex;
    gap: clamp(10px, 5vw, 40px);
    align-items: center;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  #avatar {
    width: clamp(20px, 20vw, 100px);
    height: clamp(20px, 20vw, 100px);
  }
  #authorName {
    font-size: clamp(5px, 5vw, 24px);
    font-weight: 400;
    font-family: Chau Philomene One;
    color: #212121;
  }
  #jobTitle {
    font-size: clamp(5px, 3.5vw, 20px);
    font-family: Outfit;
    font-weight: 400;
    color: #666666;
  }
  #linkedin {
    font-weight: 400;
    font-size: clamp(5px, 4vw, 16px);
    font-family: Outfit;
    color: #1644e8;
    text-decoration: underline #1644e8;
    cursor: pointer;
  }
  .toAndFro {
    display: flex;
    gap: 20px;
  }
`;
