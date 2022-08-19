import React from 'react'

import styled from 'styled-components';

import Card from './Card';

// import { getUserById } from '../services/mock/mockApi';

import { useSportSeeAPi, getDefaultKeyData } from '../services/useSportSeeApi';

export default function ListCard({ userId }) {
    // const data = getUserById(userId)
    // const nutrition = data.keyData
    const { data, isLoading, error } = useSportSeeAPi(`http://localhost:3030/user/${userId}`);
    let { keyData } = data

    if (error || isLoading) {
        keyData = getDefaultKeyData();
    }
    return (
        <DashBoardNutri>
            {/* {!isLoading && arrData.map((item) => {
                console.log(item)
                return <Card key={item.key} type={item.key} value={item.value} />
            })} */}
            <Card type="Calories" value={keyData.calorieCount} />
            <Card type="Proteines" value={keyData.proteinCount} />
            <Card type="Glucides" value={keyData.carbohydrateCount} />
            <Card type="Lipides" value={keyData.lipidCount} />
        </DashBoardNutri>
    )
}

const DashBoardNutri = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;