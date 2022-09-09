import React from 'react';
import PropTypes from 'prop-types';

// styled
import { StyledCustomTooltip, StylesAverageSession, AverageSessionSpan, AverageSessionTitle } from './style'

//Recharts
import {
    LineChart,
    XAxis,
    YAxis,
    Line,
    Tooltip,
    ResponsiveContainer
} from "recharts";

/**
 * Creation chart of the average session of the user
 * @param {object} param0 
 * @returns HTML Element
 */
export default function AverageSessions({ data }) {

    return (
        <StylesAverageSession>
            <AverageSessionTitle>
                Durée moyenne des
                <AverageSessionSpan>
                    sessions
                </AverageSessionSpan>
            </AverageSessionTitle>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.sessions} outerRadius="70%">
                    <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{
                        stroke: "rgba(255, 255, 255, 0.6)",
                        strokeWidth: 10,
                        r: 5,
                    }} />
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.6)"
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 15, right: 15 }}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <YAxis dataKey='sessionLength' hide={true} stroke="rgba(255, 255, 255, 0.6)" axisLine={false} dy={10} domain={[0, "dataMax + 60"]} />
                    <Tooltip content={<CustomTooltip />}
                        wrapperStyle={{ outline: "none" }}
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

AverageSessions.propTypes = {
    data: PropTypes.object.isRequired,
}
