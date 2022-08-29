import React from 'react'
import PropTypes from "prop-types"

//Styled
import styled from 'styled-components';

//Recharts
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

//API
import { useSportSeeAPi } from '../../services/useSportSeeApi';

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

const StyledScore = styled.div`
width: 30%;
height: 263px;
border-radius: 5px;
overflow: hidden;
position: relative;
background: #FBFBFB;
box-shadow: rgba(0, 0, 0, 0.0212);
`;

const ScoreTitle = styled.h2`
position: absolute;
top: 10%;
left: 10%;
font-weight: 500;
font-size: 15px;
line-height: 24px;
`;
const ScoreContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #ffffff;
`;
const ScoreValue = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 26px;
color: #282D30;
`
const ScoreValueText = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 14px;
color: rgba(116, 121, 140, 1);
margin-top: 5px;
`
