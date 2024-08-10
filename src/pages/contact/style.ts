import styled from "styled-components";

 export const FormContainer = styled.div`
 item-align: center;
 justify-content: center;
 height:auto;
 display:block;
 margin:40px auto;
 .inputCenter {
 width:50%;
 margin: auto;
 padding:0;
 display: flex;
 flex-direction: row;
 height:auto;
 justify-content: space-between;
 }
 input {
 width: 30ch;
 line-height: 3rem;
 padding:8px;
 margin: 14px;
 background-color: #A9A9A9;
 color: #1A1A1A;
 font-size: 1.2rem;
 font-weight: 400;
 border: 2px;
 border-color: #1A1A1A;
 }   
  input:hover, input: focus {
  border: 2px;
  border-color: #1A1A1A;
  }  
  #message {
  display:block;
    width: 84ch;
    background-color: #A9A9A9;
    color: #1A1A1A;
    line-height: 3rem;
    font-size: 1.2rem;
    font-weight: 400;
    border: 2px;
    border-color: #1A1A1A;
    padding:8px;
  }
  input label {
  padding: 4px;
  }
  Button {
  display:block;
  width: 97%;
  margin: auto;
  text-align: center;
  background-color: #212121;
  line-height: 3rem;
  padding:8px;
  font-size: 1.2rem;
  border: 2px;
  border-color: #1A1A1A;
  }
  @media (max-width: 900px) {
  .inputCenter {
  width:100%;
  flex-direction: column;
  justify-content: center;
 }
  input {
 width: 70ch;
 }
 Button {
 width:94%;
 }
  }
}
`;

export const LetsConnectContainer = styled.div `
  display: none;
  @media (max-width: 900px) {
  display: block;
  }
`
