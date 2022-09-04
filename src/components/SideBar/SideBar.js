import React from 'react';

//Styles
import { StyledSideBar, SideBarMenu, SideBarMenuItemLink, SideBarMenuItemLinkBg, SideBarMenuCopyright } from './style';

/**
 * Creation sidebar
 * @returns HTML element
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