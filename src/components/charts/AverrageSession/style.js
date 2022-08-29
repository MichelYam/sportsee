//Styled
import styled from 'styled-components';


export const StylesAverageSession = styled.div`
    position relative;
    width: 30%;
    height: 263px;
    border-radius: 5px;
    overflow: hidden;
    background:red;
`;

export const AverageSessionTitle = styled.h2`
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
`;

export const AverageSessionSpan = styled.span`
    position: absolute;
    top: 25px;
    left: 0px;
`;


export const StyledCustomTooltip = styled.div`
    padding: 0.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    background: #fff;
    border: 1px solid transparent;
`;
