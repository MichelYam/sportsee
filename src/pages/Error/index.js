import React from 'react';

import { Link } from 'react-router-dom';

//Styles
import { ErrorStyled, ErrorTitle, ErrorTexte } from './style';

import Header from "../../components/Header/Header";
import SideBar from '../../components/SideBar/SideBar';

export default function index() {
    return (
        <>
            <Header />
            <SideBar />
            <ErrorStyled>
                <ErrorTitle>404</ErrorTitle>
                <ErrorTexte>Oups! La page que vous demandez n'existe pas.</ErrorTexte>
                <Link to="/" >Retourner sur la page d'acceuil</Link>
            </ErrorStyled>
        </>
    )
}
