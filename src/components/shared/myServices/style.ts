import styled from "styled-components";

export const MyServiceTabsContainer = styled.div`
  padding-bottom: 7%;
`;

export const MyServiceTabsContent = styled.div``;
export const MyServiceBox = styled.div`
  border-bottom: solid 1px #666666;
  display: flex;
  align-items: center;
  p {
    font-size: clamp(20px,4vw,60px);
    font-weight: 400;
    font-family: Fjalla One;
    line-height: 72px;
    color: #666666;
    letter-spacing: 1px;
    transition: 1s;
  }
  &:hover {
    border-bottom: solid 1px #f9bf37;
    p {
      color: #f9bf37;
    }
  }
`;
