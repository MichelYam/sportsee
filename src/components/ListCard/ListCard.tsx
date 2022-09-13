import React from 'react';
import PropTypes from "prop-types";

//Styles
import { DashBoardNutri } from './style';

//Component
import { Card } from '../Card/Card';

interface CardData {
    data?: {
        calorieCount?: number,
        proteinCount?: number,
        carbohydrateCount?: number,
        lipidCount?: number,
    }
}

/**
 * Creation list of card 
 * @param {object} param0 
 * @returns HTML Element
 */
export const ListCard: React.FC<CardData> = ({ data }) => {

    return (
        <DashBoardNutri>
            <Card type="Calories" value={data?.calorieCount} icon="../assets/logo/calorie-icon.png" unit="kCal" />
            <Card type="Proteines" value={data?.proteinCount} icon="../assets/logo/carbohydrate-icon.png" unit="g" />
            <Card type="Glucides" value={data?.carbohydrateCount} icon="../assets/logo/protein-icon.png" unit="g" />
            <Card type="Lipides" value={data?.lipidCount} icon="../assets/logo/lipid-icon.png" unit="g" />
        </DashBoardNutri>
    )
}

ListCard.propTypes = {
    data: PropTypes.object.isRequired,
}