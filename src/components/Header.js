import React from 'react'

export default function Header() {
    return (
        <>
            <header>
                <img src='./assets/logo/logo.png' alt='logo du site' />
                <nav>
                    <ul className='navbar'>
                        <li className='navbar-item'><a href='/'>Accueil</a></li>
                        <li className='navbar-item'><a href='/'>Profil</a></li>
                        <li className='navbar-item'><a href='/'>Réglage</a></li>
                        <li className='navbar-item'><a href='/'>Communauté</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
