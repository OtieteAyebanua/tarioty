import styled from "@emotion/styled";

export const NameBarContainer = styled.div`
  padding-top: 3%;
  .topBar {
    display: flex;
    gap: 10px;
    p {
      font-size: 20px;
      font-weight: 600;
      font-family: Outfit;
    }
    #myWord {
      display: flex;
      flex-direction: column;
      gap: 5px;
      div {
        border: solid 1px #f9bf37;
      }
    }
  }
`;
