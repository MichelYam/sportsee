//Styles
import styled from 'styled-components';

export const Dashboard = styled.div`
padding: 10px;
display: flex;
gap: 50px;
border-radius: 5px;
    @media only screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

export const StyledDashboard = styled.div`
`;

export const Content = styled.div`
margin: 60px 0 0 180px;
max-width: 1440px;
height: 100%;

@media only screen and (max-width: 1100px){
    margin: 40px 0 0 150px;
}
`;

export const Title = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 24px;
margin-bottom: 41px;
`;

export const TitleSpan = styled.span`
color: #FF0101;
`;

export const MsgCongrat = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;

export const DashBoardColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 64%;
height: 100%;
row-gap: 25px;
@media only screen and (max-width: 1100px){
    width: 100%;
}
`;

export const DashBoardBottom = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;