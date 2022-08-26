import React from 'react'
//Styled
import styled from 'styled-components';

//Component
import Card from './Card';

//API
import { useSportSeeAPi } from '../services/useSportSeeApi';


/**
 * 
 * @param {*} param
 * @returns 
 */
export default function ListCard({ userId }) {
    const { data, isLoading, error } = useSportSeeAPi(`http://localhost:3030/user/${userId}`);

    let { keyData } = data
    // const userData = userModel(data)
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
