import React from 'react'
import PropTypes from "prop-types";

//Styles
import { StyledScore, ScoreTitle, ScoreContent, ScoreValue, ScoreValueText } from './style';

//Recharts
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
interface Props {
    data: {
        todayScore?: number,
        score?: number
    }
}

/**
 * Creation chart of the user score
 * @param {object} param0 
 * @returns HTML Element
 */
export const Score: React.FC<Props> = ({ data }) => {
    const pieData = [
        {
            name: "completed",
            value: data.todayScore,
            color: "#FF0000"
        },
        {
            name: "uncompleted",
            value: 1 - data.todayScore,
            color: "transparent"
        }
    ]
    return (
        <StyledScore>
            <ScoreTitle>Score</ScoreTitle>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={150} height={150} >
                    <Pie
                        data={pieData}
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                    >
                        {pieData.map((item) => (
                            <Cell key={`cell-${item}`} fill={item.color} radius="50%" />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ScoreContent>
                <ScoreValue>{`${data.todayScore * 100}%`}</ScoreValue>
                <ScoreValueText>de votre </ScoreValueText>
                <ScoreValueText>objectif</ScoreValueText>
            </ScoreContent>
        </StyledScore>
    )
}

Score.propTypes = {
    data: PropTypes.object.isRequired
}