import React from 'react'
import PropTypes from "prop-types"

//Styled
import { StyledScore, ScoreTitle, ScoreContent, ScoreValue, ScoreValueText } from './style';

//Recharts
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

//API
import { useSportSeeAPi } from '../../../services/useSportSeeApi';

export default function Score({ userId }) {
    const { data, isLoading, error } = useSportSeeAPi("keyData", userId);

    let score = data.todayScore || data.score
    if (error || isLoading) {
        score = 0;
    }
    // const scoreUser = getScoreOfUser(userId)

    const pieData = [
        {
            name: "completed",
            value: score,
            color: "#FF0000"
        },
        {
            name: "uncompleted",
            value: 1 - score,
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
                <ScoreValue>{`${score * 100}%`}</ScoreValue>
                <ScoreValueText>de votre </ScoreValueText>
                <ScoreValueText>objectif</ScoreValueText>
            </ScoreContent>
        </StyledScore>
    )
}

Score.propTypes = {
    userId: PropTypes.string.isRequired
}
