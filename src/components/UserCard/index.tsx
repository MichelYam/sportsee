import React from 'react';
import PropTypes from "prop-types";

//Styles
import { UserCard, UserLink, UserImage, UserContent } from './style';

/**
 * Creation user card
 * @param {string} id - The id of user
 * @param {string} name - the name of user
 * @returns html element
 */
export default function index({ id, name }) {

    return (
        <UserCard>
            <UserLink to={`/dashboard/${id}`}>
                <UserImage src='../assets/logo/avatar.png' alt='avatar' />
                <UserContent>
                    {name}
                </UserContent>
            </UserLink >
        </UserCard>
    )
}


index.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}