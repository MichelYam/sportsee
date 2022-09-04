import React from 'react';

//Component
import UserCard from '../../components/UserCard/index';

//Styles
import { StyledHome, HomeTitle, UserList } from './style';


/**
 * Creation home page that contain all users
 * @returns jsx Element
 */
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
