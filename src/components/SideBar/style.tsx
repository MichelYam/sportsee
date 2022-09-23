//styles
import styled from 'styled-components';

export const StyledSideBar = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
width: 117px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SideBarMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 91px;
`;

export const SideBarMenuItemLink = styled.a`
margin-bottom: 20px;
`;

export const SideBarMenuItemLinkBg = styled.img`
`;

export const SideBarMenuCopyright = styled.p`
position: absolute;
bottom: 5%;
writing-mode: vertical-rl;
text-orientation: mixed;
transform: rotate(180deg);
color: #ffffff;
font-weight: 500;
font-size: 12px;
line-height: 24px;
`;