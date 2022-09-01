import React from 'react';

import { StyledSideBar, SideBarMenu, SideBarMenuItemLink, SideBarMenuItemLinkBg, SideBarMenuCopyright } from "./style";
/**
 * 
 * @returns 
 */
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
