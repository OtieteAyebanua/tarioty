import styled from "styled-components";

export const FormContainer = styled.div`
  item-align: center;
  justify-content: center;
  height: auto;
  display: block;
  margin: 40px auto;
  .inputCenter {
    width: 50%;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: space-between;
    @media (max-width: 425px) {
      width: 100%;
    }
  }
  input {
    width: 44%;
    border-radius: 5px;
    margin-bottom: 3%;
    background-color: #212121;
    font-size: clamp(5px, 4.5vw, 16px);
    font-weight: 400;
    border: none;
    border-color: #1a1a1a;
    outline: none;
    color: #f7f7f7;
    padding: 2%;
    font-family: outfit;
  }
  input:hover, input: focus {
    border: solid #f9bf37 1px;
  }
  #message {
    display: block;
    width: 84ch;
    border-radius: 5px;
    background-color: #212121;
    color: #f7f7f7;
    line-height: 3rem;
    font-size: clamp(5px, 4vw, 16px);
    font-weight: 400;
    border: 2px;
    border-color: #1a1a1a;
    padding: 8px;
    margin-bottom: 5%;
    font-family: outfit;
    outline: none;
    height: 180px;
  }
  #message:hover {
    border: solid #f9bf37 1px;
  }
  input label {
    padding: 4px;
  }
  Button {
    display: block;
    width: 100%;
    border-radius: 100px;
    margin: auto;
    text-align: center;
    background-color: #212121;
    line-height: 3rem;
    padding: 8px;
    font-size: clamp(5px, 4vw, 16px);
    border: 2px;
    border-color: #1a1a1a;
    color: #f7f7f7;
    font-family: outfit;
  }
  button:hover {
    background: #f9bf37;
    @media (max-width: 900px) {
      .inputCenter {
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }
      input {
        width: 70ch;
      }
      Button {
        width: 94%;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LetsConnectContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
