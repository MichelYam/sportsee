import React from 'react';

import { StyledHeader, StyledHeaderLogo, NavBar, NavBarMenu, NavBarMenuItem, NavbarMenuItemLink } from 'styled-components';

export default function Header() {
    const handleStorage = () => {
        localStorage.setItem("user", null)
    }
    return (
        <>
            <StyledHeader>
                <StyledHeaderLogo src='../assets/logo/logo.png' alt='logo du site' />
                <NavBar>
                    <NavBarMenu>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='/' onClick={() => handleStorage()}>Accueil</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='/'>Profil</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='/'>Réglage</NavbarMenuItemLink>
                        </NavBarMenuItem>
                        <NavBarMenuItem>
                            <NavbarMenuItemLink href='/'>Communauté</NavbarMenuItemLink>
                        </NavBarMenuItem>
                    </NavBarMenu>
                </NavBar>
            </StyledHeader>
        </>
    )
}
