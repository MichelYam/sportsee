import React from 'react';

import { StyledHeader, StyledHeaderLogo, NavBar, NavBarMenu, NavBarMenuItem, NavbarMenuItemLink } from './style';

/**
 * Creation Header component
 * @returns HTML element
 */
export default function Header() {

    return (
        <>
            <StyledHeader>
                <StyledHeaderLogo src='../assets/logo/logo.png' alt='logo du site' />
                <NavBar>
                    <NavBarMenu>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='/'>Accueil</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='#'>Profil</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='#'>Réglage</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='#'>Communauté</NavbarMenuItemLink>
                        </NavBarMenuItem>
                    </NavBarMenu>
                </NavBar>
            </StyledHeader>
        </>
    )
}
