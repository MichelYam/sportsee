import React from 'react'

import UserCard from '../../components/UserCard/index';


import { StyledHome, HomeTitle, UserList } from './style';


// import avatar from '../assets/logo/avatar.png';

export default function index() {
    return (
        <StyledHome>
            <HomeTitle>Se connecter en tant que : </HomeTitle>
            <UserList>
                <UserCard id='12' name="Karl"></UserCard>
                <UserCard id='18' name="Cecilia"></UserCard>
            </UserList>
        </StyledHome>
    )
}
