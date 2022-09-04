import styled from "styled-components"

export const NutriCard = styled.div`
display: flex;
align-items: center;
border-radius: 5px;
width: 258px;
background-color: #FBFBFB;
padding: 30px;
@media only screen and (max-width: 1100px){
  flex-direction: column;
  padding: 15px 10px;
  width: calc(90%/4);
}
`;

export const NutriCardImgContent = styled.div`
width: 60px;
height: 60px;
`;

export const NutriCardImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

export const NutriCardContent = styled.div`
display: flex;
flex-direction: column;
margin-left: 35px;
@media only screen and (max-width: 1100px){
    margin: 10px 0px;
}
`;
export const NutriCardContentValue = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #282D30;
`;
export const NutriCardContentType = styled.span`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: rgba(116, 121, 140, 1);
`