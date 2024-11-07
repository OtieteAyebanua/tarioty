import styled from "styled-components";

export const ShowCaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 325px;
  margin-bottom: 1.5%;
  .innerbox {
    width: 97%;
    height: 80%;
    margin: auto;
    position: relative;
  }
  .hoverme {
    position: absolute;
    top: 0;
    height: 98%;
    width: 100%;
    background: #152758;
    opacity: 0.8;
    display: none;
   border-radius: 5px;
  }
  .innerbox:hover {
    .hoverme {
     transition: 0.5s;
      display: block;
    }
  }
`;
