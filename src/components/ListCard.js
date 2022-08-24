import React from 'react'

import styled from 'styled-components';

import Card from './Card';

import { useSportSeeAPi } from '../services/useSportSeeApi';



export default function ListCard({ userId }) {
    const { data, isLoading, error } = useSportSeeAPi(`http://localhost:3030/user/${userId}`);
    let { keyData } = data
    return (
        <DashBoardNutri>
            {isLoading || error ? "Loading..." : <>
                <Card type="Calories" value={keyData.calorieCount} icon="../assets/logo/calorie-icon.png" unit="kCal" />
                <Card type="Proteines" value={keyData.proteinCount} icon="../assets/logo/carbohydrate-icon.png" unit="g" />
                <Card type="Glucides" value={keyData.carbohydrateCount} icon="../assets/logo/protein-icon.png" unit="g" />
                <Card type="Lipides" value={keyData.lipidCount} icon="../assets/logo/lipid-icon.png" unit="g" />
            </>}
        </DashBoardNutri>
    )
}

const DashBoardNutri = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;