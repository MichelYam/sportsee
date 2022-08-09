import React from 'react'

import styled from 'styled-components';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { getScoreOfUser } from '../services/mock/mockApi';

export default function Score({ userId }) {

    const scoreUser = getScoreOfUser(userId)

    const pieData = [
        { name: "completed", value: scoreUser, color: "#FF0000" },
        { name: "uncompleted", value: 1 - scoreUser, color: "transparent" }
    ]
    // if (error || isLoading) {
    //     todayScore = 0;
    // }
    return (
        <StyledScore>
            <ScoreTitle>Score</ScoreTitle>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={150} height={150}>
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
                <ScoreValue>{`${scoreUser * 100}%`}</ScoreValue>
                <ScoreValueText>de votre </ScoreValueText>
                <ScoreValueText>objectif</ScoreValueText>
            </ScoreContent>
        </StyledScore>
    )
}

const StyledScore = styled.div`
width: 258px;
height: 263px;
border-radius: 5px;
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
