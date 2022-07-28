import React from 'react'

export default function SideBar() {
    return (
        <>
            <div className='sidebar'>
                <nav className='sidebar-menu'>
                    <a className='sidebar-menu-item' href='/'><img src='./assets/logo/icon.png' alt='icon' /></a>
                    <a className='sidebar-menu-item' href='/'><img src='./assets/logo/icon1.png' alt='icon' /></a>
                    <a className='sidebar-menu-item' href='/'><img src='./assets/logo/icon2.png' alt='icon' /></a>
                    <a className='sidebar-menu-item' href='/'><img src='./assets/logo/icon3.png' alt='icon' /></a>
                </nav>
                <p className='copyright'>Copyright, SportSee 2020</p>
            </div>
        </>
    )
}
