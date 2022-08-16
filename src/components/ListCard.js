import React from 'react'

import { getUserById } from '../services/mock/mockApi';
import styled from 'styled-components';
import Card from './Card';
export default function ListCard({ userId }) {
    const data = getUserById(userId)
    // const nutrition = Object.entries(data.keyData)
    const nutrition = data.keyData
    return (
        <DashBoardNutri>
            {/* {nutrition.map((item) => {
                return <Card key={item} item={item} />
            })} */}
            <Card type="Calories" value={nutrition.calorieCount} />
            <Card type="Proteines" value={nutrition.proteinCount} />
            <Card type="Glucides" value={nutrition.carbohydrateCount} />
            <Card type="Lipides" value={nutrition.lipidCount} />
        </DashBoardNutri>
    )
}

const DashBoardNutri = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;