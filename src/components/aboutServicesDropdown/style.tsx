import styled from "@emotion/styled";

export const AboutServicesDropdownStyle = styled.div``;

export const AccordionSummaryStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .name {
    color: #ededed;
    font-size: clamp(10px, 6vw, 60px);
    font-weight: 400;
    font-family: Fjalla one;
  }
  .price {
    font-size: clamp(10px, 6vw, 48px);
    font-family: Fjalla one;
    font-weight: 400;
    color: #666666;
  }
`;

export const AccordionDetailStyle = styled.div`
  .imgBox {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 98%;
      margin: auto;
      aspect-ratio: 10/5;
    }
  }
  .detail {
    display: flex;
    width: 98%;
    margin: auto;
    justify-content: space-between;
    gap: 10%;
  }
  .secondBox {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 60px;
    @media (max-width: 425px) {
      gap: 20px;
    }
    margin: auto;
    padding-top: 50px;
    .description {
      color: #212121;
      font-size: clamp(5px, 2.5vw, 20px);
      font-weight: 400;
      font-family: outfit;
      width: 100%;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 2%;
      padding-right: 2%;
      padding-top: 1%;
      padding-bottom: 1%;
      width: 100%;
      background: #0a0a0a;
      border: none;
      color: #ffffff;
      font-weight: 400;
      font-family: outfit;
      cursor: pointer;
      .start {
        font-size: clamp(5px, 3vw, 20px);
        padding-left: 2px;
      }
    }
    .caret {
      border-radius: 100%;
      height: clamp(10px, 4vw, 40px);
      width: clamp(10px, 4vw, 40px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      cursor: pointer;
    }
    .caret:hover {
      background: #f9bf37;
    }
  }

  .thirdBox {
    padding-top: 50px;
    width: 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 30px;
    @media (max-width: 425px) {
      gap: 20px;
    }
    .package {
      color: #878787;
      font-size: clamp(5px, 2.5vw, 20px);
      white-space: nowrap;
      font-weight: 400;
      font-family: outfit;
    }
    .packageContainer {
      display: flex;
      gap: 10px;
      .check {
        border-radius: 100px;
        width: clamp(10px, 4vw, 30px);
        height: clamp(10px, 4vw, 30px);
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #212121;
      }
      .packageName {
        color: #212121;
        font-family: outfit;
        font-size: clamp(5px, 2vw, 20px);
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }
`;
