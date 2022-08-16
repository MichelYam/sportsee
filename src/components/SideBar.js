import React from 'react';

import styled from 'styled-components';
export default function SideBar() {
    return (
        <StyledSideBar>
            <SideBarMenu>
                <SideBarMenuItemLink href='/'>
                    <SideBarMenuItemLinkBg src='../assets/logo/icon.png' alt='icon' />
                </SideBarMenuItemLink>
                <SideBarMenuItemLink href='/'>
                    <SideBarMenuItemLinkBg src='../assets/logo/icon1.png' alt='icon' />
                </SideBarMenuItemLink>
                <SideBarMenuItemLink href='/'>
                    <SideBarMenuItemLinkBg src='../assets/logo/icon2.png' alt='icon' />
                </SideBarMenuItemLink>
                <SideBarMenuItemLink href='/'>
                    <SideBarMenuItemLinkBg src='../assets/logo/icon3.png' alt='icon' />
                </SideBarMenuItemLink>
            </SideBarMenu>
            <SideBarMenuCopyright>Copyright, SportSee 2020</SideBarMenuCopyright>
        </StyledSideBar>
    )
}

const StyledSideBar = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 117px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SideBarMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 91px;
`;

const SideBarMenuItemLink = styled.a`
margin-bottom: 20px;
`;

const SideBarMenuItemLinkBg = styled.img`
`;

const SideBarMenuCopyright = styled.p`
writing-mode: vertical-rl;
text-orientation: mixed;
transform: rotate(180deg);
color: #ffffff;
`;