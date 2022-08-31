import React from 'react';

import styled from 'styled-components';

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

const StyledHeader = styled.div`
position: relative;
width: 100%;
height: 91px;
display: flex;
align-items: center;
background: #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
z-index: 1;
`
const StyledHeaderLogo = styled.img`
margin-left: 20px;
width: 178px;
height: 60px;
`
const NavBar = styled.nav`
width: 100%;

`
const NavBarMenu = styled.ul`
display: flex;
justify-content: space-evenly;
`
const NavBarMenuItem = styled.li`
`
const NavbarMenuItemLink = styled.a`
color: #ffffff;
font-size: 24px;
text-decoration: none;
`

