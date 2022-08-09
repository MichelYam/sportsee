import React from 'react'
// styled
import styled from "styled-components";

import { averageSessions } from "../services/mock/mockApi";

import {
    LineChart,
    XAxis,
    YAxis,
    Line,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function AverageSessions({ userId }) {
    const data = averageSessions(userId)
    const newData = data.map(a => ({ ...a, day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][a.day - 1] }))
    return (
            <StylesAverageSession>
                <AverageSessionTitle>
                    Durée moyenne des
                    <AverageSessionSpan>
                        sessions
                    </AverageSessionSpan>
                </AverageSessionTitle>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={newData}>
                        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{
                            stroke: "rgba(255, 255, 255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                        }} />
                        <XAxis
                            dataKey="day"
                            stroke="rgba(255, 255, 255, 0.6)"
                            axisLine={false}
                            dy={10}
                            tickLine={false}
                            tick={{
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />
                        <YAxis dataKey='sessionLength' hide={true} stroke="rgba(255, 255, 255, 0.6)" axisLine={false} dy={10} />
                        <Tooltip content={<CustomTooltip />}
                            cursor={{
                                stroke: "rgba(0, 0, 0, 0.1)",
                                strokeWidth: 32,
                            }} />
                    </LineChart>
                </ResponsiveContainer>
            </StylesAverageSession>
    )
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return <StyledCustomTooltip>{`${payload[0].value} min`}</StyledCustomTooltip >;
    }
    return null;
};

const StylesAverageSession = styled.div`
    position relative;
    width: 258px;
    height: 263px;
    border-radius: 5px;
    overflow: hidden;
    background:red;
`;

const AverageSessionTitle = styled.h2`
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
`;

const AverageSessionSpan = styled.span`
    position: absolute;
    top: 25px;
    left: 0px;
`;


const StyledCustomTooltip = styled.div`
padding: 0.5rem;
font-size: 0.7rem;
font-weight: 500;
background: #fff;
border: 1px solid transparent;
`;
  