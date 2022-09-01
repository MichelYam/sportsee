import React from 'react'

import { UserCard, UserLink, UserImage, UserContent } from './style';

export default function index(props) {

    return (
        <UserCard>
            <UserLink to={`/dashboard/${props.id}`}>
                <UserImage src='../assets/logo/avatar.png' alt='avatar' />
                <UserContent>
                    {props.name}
                </UserContent>
            </UserLink >
        </UserCard>
    )
}
