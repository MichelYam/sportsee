import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserCard = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    box-shadow: 0px 2px 5px #000;
    background-color: #E60000;
`
export const UserImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;


export const UserContent = styled.p`
color:#ffffff;
`
export const UserLink = styled(Link)`
    width:100%;
    text-align: center;
    text-decoration: none;
`;

