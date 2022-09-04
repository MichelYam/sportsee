import React from 'react';
import PropTypes from "prop-types";

//Styles
import { DashBoardNutri } from './style';

//Component
import Card from '../Card/Card';

/**
 * Creation list of card 
 * @param {object} param0 
 * @returns HTML Element
 */
export default function ListCard({ data }) {

    return (
        <DashBoardNutri>
            <Card type="Calories" value={data.keyData.calorieCount} icon="../assets/logo/calorie-icon.png" unit="kCal" />
            <Card type="Proteines" value={data.keyData.proteinCount} icon="../assets/logo/carbohydrate-icon.png" unit="g" />
            <Card type="Glucides" value={data.keyData.carbohydrateCount} icon="../assets/logo/protein-icon.png" unit="g" />
            <Card type="Lipides" value={data.keyData.lipidCount} icon="../assets/logo/lipid-icon.png" unit="g" />
        </DashBoardNutri>
    )
}

ListCard.propTypes = {
    data: PropTypes.object.isRequired
}
