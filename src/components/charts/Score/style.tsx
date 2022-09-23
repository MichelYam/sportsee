//Styles
import styled from 'styled-components';

export const StyledScore = styled.div`
width: 30%;
height: 263px;
border-radius: 5px;
overflow: hidden;
position: relative;
background: #FBFBFB;
box-shadow: rgba(0, 0, 0, 0.0212);
`;

export const ScoreTitle = styled.h2`
position: absolute;
top: 10%;
left: 10%;
font-weight: 500;
font-size: 15px;
line-height: 24px;
`;

export const ScoreContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #ffffff;
`;

export const ScoreValue = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 26px;
color: #282D30;
`;

export const ScoreValueText = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 14px;
color: rgba(116, 121, 140, 1);
margin-top: 5px;
`;