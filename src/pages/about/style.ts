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

export const HBContainer = styled.div`
  position: relative;
  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UnderImgHero = styled.div`
display: flex;
font-family: Outfit;
color: #bababa;
justify-content: center;
margin: 50px auto;
#word {
font-size: clamp(16px, 1.5vw, 20px);
text-align: center;
width: 73%;
font-weight: 400;
}
@media (max-width: 900px) {
  width: 100%;
  margin: 20px auto;
  #word {
    width: 100%;
    font-weight: 400;
  }
}
`;

export const AccomplishmentContainer = styled.div `
  display: flex;
  flex-direction: row;
  position: relative;
  font-family: Outfit;
  justify-content: space-between;
  margin: 0 6% 70px 6%;
  .accomplishmentCard {
    display: block;  
  } 
  .numberSign {
    display: flex;
    font-weight: 600;
    justify-content: center;
  }
  .number {
    color: rgba(243, 242, 243, 1);
    font-size: clamp(45px, 7.5vw, 100px);
  }
  .sign {
    color:rgba(112, 102, 108, 1);
    font-size: clamp(45px, 7.5vw, 95px);
  }
  .text {
    font-size: clamp(16px, 1.5vw, 20px);
    font-weight: 400;
    color:rgba(112, 102, 108, 1);
    justify-content: center;
  }
  @media (max-width: 900px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 60px;
    .text {
      text-align: center;
    }
    .accomplishmentCard {
      margin: 20px 0;
    }
  }
`;
export const ExperienceContainer = styled.div `
margin: auto;
Display{
padding: 2%;
}
position: relative;
font-size: clamp(20px,3.6vw,55px);
font-weight: 400;
font-family: Fjalla One;
letter-spacing: 1px;
transition: 1s; 
.experienceCard {
  background-color:#0A0A0A;
  padding: 0 40px;
  text-align: start;
  cursor: pointer;
  margin: 40px auto;
}
.experienceCard:hover {
  background-color:#454545;
  transition: 0.7s;
}
.experienceCard:focus, .experienceCard:active {
  background-color:#0A0A0A;
  transition: 0.7s;
}
.experienceCardHead {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 152px;
}
.experienceCompany {
  color: #F3F2F3;
}
.experienceTitle, .experienceYear {
  color: #666666;
  font-size: clamp(18px,3.1vw,44px);
}
.experienceTitle, .experienceCompany {
  width: 41%;
}
.experienceYear {
  width: 26%;
}
.experienceCardUnder {
  background-color:#0A0A0A;
  display: block;
  text-align: start;
  cursor: pointer;
  margin:auto;
  width:100%;
  border-radius: 20px;
  color: #BABABA;
  padding: 20px 0;
  padding-top:0;
  font-family: Outfit;
  font-size: clamp(14px,2vw,24px);
}
.word {
  margin:10px 0;
}
img {
width:100%;

}
Button {
  Background-color: #F7F7F7;
  display: block;
  text-align: start;
  cursor: pointer;
  margin: 40px auto;
  width:100%;
  color: #212121;
  padding: 20px 40px;
  justify-content: space-between;
  font-family: Outfit;
  font-size: clamp(14px,2vw,24px);
}
Button:hover {
  background-color:#F9BF37;
  transistion:1s;
  color:#F7F7F7;
}
  @media (max-width: 900px) {
    padding: 0;
    .experienceCard {
      line-height: 120px;
    }
    .experienceCardUnder {
    line-height: 20px;
    }
  }
  @media (max-width: 850px) {
    .experienceCard {
      padding: 0 20px;
      line-height: 100px;
    }
    .experienceTitle {
      display: none;
    }
    .experienceCompany, .experienceYear {
      width: 50%;
    }
    .experienceYear {
      text-align: right;
    }
  }
`;
