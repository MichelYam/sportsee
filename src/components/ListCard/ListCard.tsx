import React from 'react'

import PropTypes from 'prop-types';

//Component
import Card from '../Card/Card';

//API   
import { useSportSeeAPi } from '../../services/useSportSeeApi';

import { DashBoardNutri } from "./style"




/**
 * 
 * @param {*} param
 * @returns 
 */
export default function ListCard({ userId }) {
    interface KeyData {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: string,
    }

    const { data, isLoading, error } = useSportSeeAPi("keyData", userId);

    let userData: KeyData = {
        calorieCount: data.calorieCount,
        proteinCount: data.proteinCount,
        carbohydrateCount: data.carbohydrateCount,
        lipidCount: data.lipidCount,
    }

    return (
        <DashBoardNutri>
            {isLoading || error ? "Loading..." : <>
                <Card type="Calories" value={userData.calorieCount} icon="../assets/logo/calorie-icon.png" unit="kCal" />
                <Card type="Proteines" value={userData.proteinCount} icon="../assets/logo/carbohydrate-icon.png" unit="g" />
                <Card type="Glucides" value={userData.carbohydrateCount} icon="../assets/logo/protein-icon.png" unit="g" />
                <Card type="Lipides" value={userData.lipidCount} icon="../assets/logo/lipid-icon.png" unit="g" />
            </>}
        </DashBoardNutri>
    )
}

ListCard.propTypes = {
    userId: PropTypes.string.isRequired,
}
